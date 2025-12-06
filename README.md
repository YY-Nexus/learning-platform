# AI学习平台

一个现代化的AI学习平台，提供课程学习、在线考试、证书认证等功能。

## 特性

- 📚 丰富的AI课程体系
- 📝 在线练习和考试系统
- 🎓 学习证书认证
- 👥 社区协作学习
- 📊 学习进度追踪
- 🎯 个性化学习路径
- 📱 响应式设计，支持移动端

## 技术栈

- **前端框架**: Next.js 15 + React 19
- **类型系统**: TypeScript
- **样式方案**: Tailwind CSS + shadcn/ui
- **数据库**: MySQL 8.0
- **认证**: JWT + bcrypt
- **表单处理**: React Hook Form + Zod
- **数据可视化**: Recharts

## 快速开始

### 环境要求

- Node.js 18+
- MySQL 8.0+
- pnpm 8+ (推荐)

### 安装

\`\`\`bash
# 克隆项目
git clone <repository-url>
cd ai-learning-platform

# 安装依赖
pnpm install

# 配置环境变量
cp .env.example .env.local
# 编辑 .env.local 填写配置

# 初始化数据库
pnpm run db:init

# 启动开发服务器
pnpm dev
\`\`\`

访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

\`\`\`
ai-learning-platform/
├── app/                    # Next.js App Router
│   ├── api/               # API路由
│   ├── (pages)/           # 页面路由
│   └── layout.tsx         # 根布局
├── components/            # React组件
│   ├── ui/               # UI基础组件
│   └── ...               # 业务组件
├── lib/                   # 工具函数
│   ├── database.ts       # 数据库连接
│   ├── auth.ts           # 认证工具
│   └── utils.ts          # 通用工具
├── types/                 # TypeScript类型
├── data/                  # 静态数据
├── hooks/                 # 自定义Hooks
├── docs/                  # 项目文档
├── scripts/               # 脚本文件
└── public/                # 静态资源
\`\`\`

## 可用脚本

\`\`\`bash
pnpm dev          # 启动开发服务器
pnpm build        # 生产构建
pnpm start        # 启动生产服务器
pnpm lint         # 代码检查
pnpm type-check   # TypeScript类型检查
pnpm db:init      # 初始化数据库
pnpm db:test      # 测试数据库连接
pnpm validate-env # 验证环境变量
\`\`\`

## 文档

- [快速开始](./docs/getting-started.md)
- [项目架构](./docs/architecture.md)
- [API文档](./docs/api-documentation.md)
- [数据库设计](./docs/database-schema.md)
- [开发规范](./docs/coding-standards.md)

## 环境变量

查看 [.env.example](./.env.example) 了解所有可用的环境变量。

必需的环境变量：
- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS` - 数据库配置
- `JWT_SECRET` - JWT密钥
- `NEXT_PUBLIC_APP_URL` - 应用URL

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！
