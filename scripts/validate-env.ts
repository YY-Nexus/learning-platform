// 环境变量验证脚本
const requiredEnvVars = ["DB_HOST", "DB_PORT", "DB_NAME", "DB_USER", "DB_PASS", "JWT_SECRET"]

const optionalEnvVars = ["NEXT_PUBLIC_APP_URL", "OPENAI_API_KEY", "STRIPE_SECRET_KEY"]

function validateEnv() {
  console.log("验证环境变量配置...\n")

  const missing: string[] = []
  const present: string[] = []

  // 检查必需变量
  console.log("必需变量:")
  requiredEnvVars.forEach((varName) => {
    if (process.env[varName]) {
      console.log(`  ✅ ${varName}`)
      present.push(varName)
    } else {
      console.log(`  ❌ ${varName} (缺失)`)
      missing.push(varName)
    }
  })

  // 检查可选变量
  console.log("\n可选变量:")
  optionalEnvVars.forEach((varName) => {
    if (process.env[varName]) {
      console.log(`  ✅ ${varName}`)
    } else {
      console.log(`  ⚠️  ${varName} (未配置)`)
    }
  })

  if (missing.length > 0) {
    console.log(`\n❌ 有 ${missing.length} 个必需变量未配置`)
    console.log("请在 .env.local 文件中配置以下变量:")
    missing.forEach((varName) => console.log(`  - ${varName}`))
    process.exit(1)
  } else {
    console.log("\n✅ 所有必需的环境变量都已配置")
  }
}

validateEnv()
