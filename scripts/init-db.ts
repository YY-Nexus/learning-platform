// 数据库初始化脚本
import { getPool } from "../lib/database"

async function initDatabase() {
  const pool = getPool()

  try {
    console.log("开始初始化数据库...")

    // 创建users表
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(36) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(50) UNIQUE NOT NULL,
        display_name VARCHAR(100) NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        avatar TEXT,
        bio TEXT,
        role ENUM('student', 'teacher', 'admin') DEFAULT 'student',
        email_verified BOOLEAN DEFAULT FALSE,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        last_login_at TIMESTAMP NULL,
        INDEX idx_email (email),
        INDEX idx_username (username)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log("✓ users表创建成功")

    // 创建courses表
    await pool.query(`
      CREATE TABLE IF NOT EXISTS courses (
        id VARCHAR(36) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        instructor_id VARCHAR(36) NOT NULL,
        category VARCHAR(50) NOT NULL,
        level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
        duration VARCHAR(50),
        price DECIMAL(10,2) DEFAULT 0,
        original_price DECIMAL(10,2),
        thumbnail TEXT,
        is_published BOOLEAN DEFAULT FALSE,
        is_featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        published_at TIMESTAMP NULL,
        INDEX idx_category (category),
        INDEX idx_level (level),
        INDEX idx_instructor (instructor_id),
        FOREIGN KEY (instructor_id) REFERENCES users(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log("✓ courses表创建成功")

    // 创建enrollments表
    await pool.query(`
      CREATE TABLE IF NOT EXISTS enrollments (
        id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36) NOT NULL,
        course_id VARCHAR(36) NOT NULL,
        progress INT DEFAULT 0,
        started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        completed_at TIMESTAMP NULL,
        last_accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        certificate_id VARCHAR(36),
        INDEX idx_user (user_id),
        INDEX idx_course (course_id),
        UNIQUE KEY unique_enrollment (user_id, course_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log("✓ enrollments表创建成功")

    // 创建exams表
    await pool.query(`
      CREATE TABLE IF NOT EXISTS exams (
        id VARCHAR(36) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        category VARCHAR(50) NOT NULL,
        difficulty ENUM('easy', 'medium', 'hard') DEFAULT 'medium',
        duration INT NOT NULL,
        passing_score INT NOT NULL,
        total_questions INT NOT NULL,
        thumbnail TEXT,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_category (category),
        INDEX idx_difficulty (difficulty)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log("✓ exams表创建成功")

    // 创建exam_attempts表
    await pool.query(`
      CREATE TABLE IF NOT EXISTS exam_attempts (
        id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36) NOT NULL,
        exam_id VARCHAR(36) NOT NULL,
        score INT NOT NULL,
        total_questions INT NOT NULL,
        correct_answers INT NOT NULL,
        answers JSON NOT NULL,
        started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        completed_at TIMESTAMP NULL,
        duration INT,
        passed BOOLEAN DEFAULT FALSE,
        certificate_id VARCHAR(36),
        INDEX idx_user (user_id),
        INDEX idx_exam (exam_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (exam_id) REFERENCES exams(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log("✓ exam_attempts表创建成功")

    // 创建certificates表
    await pool.query(`
      CREATE TABLE IF NOT EXISTS certificates (
        id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36) NOT NULL,
        course_id VARCHAR(36),
        exam_id VARCHAR(36),
        title VARCHAR(255) NOT NULL,
        description TEXT,
        issue_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expiry_date TIMESTAMP NULL,
        certificate_url TEXT,
        verification_code VARCHAR(50) UNIQUE NOT NULL,
        credential_id VARCHAR(100) UNIQUE NOT NULL,
        issued_by VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_user (user_id),
        INDEX idx_verification (verification_code),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE SET NULL,
        FOREIGN KEY (exam_id) REFERENCES exams(id) ON DELETE SET NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log("✓ certificates表创建成功")

    console.log("\n✅ 数据库初始化完成！")
  } catch (error) {
    console.error("❌ 数据库初始化失败:", error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

initDatabase()
