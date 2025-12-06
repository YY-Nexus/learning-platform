// 数据库表结构类型定义

export interface UserTable {
  id: string
  email: string
  username: string
  display_name: string
  password_hash: string
  avatar?: string
  bio?: string
  role: "student" | "teacher" | "admin"
  email_verified: boolean
  is_active: boolean
  created_at: Date
  updated_at: Date
  last_login_at?: Date
}

export interface CourseTable {
  id: string
  title: string
  description: string
  instructor_id: string
  category: string
  level: "beginner" | "intermediate" | "advanced"
  duration: string
  price: number
  original_price?: number
  thumbnail: string
  is_published: boolean
  is_featured: boolean
  created_at: Date
  updated_at: Date
  published_at?: Date
}

export interface EnrollmentTable {
  id: string
  user_id: string
  course_id: string
  progress: number
  started_at: Date
  completed_at?: Date
  last_accessed_at: Date
  certificate_id?: string
}

export interface ExamTable {
  id: string
  title: string
  description: string
  category: string
  difficulty: "easy" | "medium" | "hard"
  duration: number
  passing_score: number
  total_questions: number
  thumbnail: string
  is_active: boolean
  created_at: Date
  updated_at: Date
}

export interface ExamAttemptTable {
  id: string
  user_id: string
  exam_id: string
  score: number
  total_questions: number
  correct_answers: number
  answers: string
  started_at: Date
  completed_at?: Date
  duration: number
  passed: boolean
  certificate_id?: string
}

export interface CertificateTable {
  id: string
  user_id: string
  course_id?: string
  exam_id?: string
  title: string
  description: string
  issue_date: Date
  expiry_date?: Date
  certificate_url: string
  verification_code: string
  credential_id: string
  issued_by: string
  created_at: Date
}

export interface TeamTable {
  id: string
  name: string
  description: string
  avatar: string
  max_members?: number
  category: string
  is_public: boolean
  created_at: Date
  created_by: string
  updated_at: Date
}

export interface TeamMemberTable {
  id: string
  user_id: string
  team_id: string
  role: "owner" | "admin" | "member"
  joined_at: Date
  contribution: number
}
