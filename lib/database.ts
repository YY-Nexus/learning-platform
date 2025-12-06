import mysql from "mysql2/promise"

// 数据库连接配置
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: Number.parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "ai_learning",
  waitForConnections: true,
  connectionLimit: Number.parseInt(process.env.DB_CONNECTION_LIMIT || "10"),
  queueLimit: 0,
}

// 创建连接池
let pool: mysql.Pool

export function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool(dbConfig)
  }
  return pool
}

// 执行查询
export async function query<T = any>(sql: string, params?: any[]): Promise<T> {
  const connection = await getPool().getConnection()
  try {
    const [results] = await connection.execute(sql, params)
    return results as T
  } finally {
    connection.release()
  }
}

// 执行事务
export async function transaction<T>(callback: (connection: mysql.PoolConnection) => Promise<T>): Promise<T> {
  const connection = await getPool().getConnection()
  try {
    await connection.beginTransaction()
    const result = await callback(connection)
    await connection.commit()
    return result
  } catch (error) {
    await connection.rollback()
    throw error
  } finally {
    connection.release()
  }
}

// 测试数据库连接
export async function testConnection(): Promise<boolean> {
  try {
    const connection = await getPool().getConnection()
    await connection.ping()
    connection.release()
    return true
  } catch (error) {
    console.error("Database connection failed:", error)
    return false
  }
}

// 关闭连接池
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end()
  }
}
