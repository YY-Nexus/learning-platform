// 数据库连接测试脚本
import { testConnection, getPool } from "../lib/database"

async function testDB() {
  console.log("测试数据库连接...\n")

  try {
    const isConnected = await testConnection()

    if (isConnected) {
      console.log("✅ 数据库连接成功！")

      // 测试查询
      const pool = getPool()
      const [rows] = await pool.query("SELECT DATABASE() as db")
      console.log(`✅ 当前数据库: ${(rows as any)[0].db}`)

      // 显示所有表
      const [tables] = await pool.query("SHOW TABLES")
      console.log("\n数据库表:")
      ;(tables as any[]).forEach((table) => {
        const tableName = Object.values(table)[0]
        console.log(`  - ${tableName}`)
      })
    } else {
      console.error("❌ 数据库连接失败")
      process.exit(1)
    }
  } catch (error) {
    console.error("❌ 测试失败:", error)
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

testDB()
