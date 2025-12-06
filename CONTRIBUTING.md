# 贡献指南

感谢您对 AI 学习平台的关注！我们欢迎所有形式的贡献。

## 如何贡献

### 报告 Bug

如果您发现了 bug，请创建一个 Issue，包含以下信息:

- Bug 的详细描述
- 复现步骤
- 预期行为
- 实际行为
- 截图（如果适用）
- 环境信息（浏览器、操作系统等）

### 提出新功能

如果您有新功能建议:

1. 先搜索是否已有类似的 Issue
2. 创建新的 Feature Request Issue
3. 详细描述功能需求和使用场景
4. 等待维护者反馈

### 提交代码

#### 1. Fork 项目

点击右上角的 "Fork" 按钮

#### 2. 克隆仓库

\`\`\`bash
git clone https://github.com/your-username/ai-learning-platform.git
cd ai-learning-platform
\`\`\`

#### 3. 创建分支

\`\`\`bash
git checkout -b feature/your-feature-name
\`\`\`

分支命名规范:
- `feature/` - 新功能
- `fix/` - Bug 修复
- `docs/` - 文档更新
- `refactor/` - 代码重构
- `test/` - 测试相关

#### 4. 进行修改

- 遵循项目的代码规范
- 添加必要的注释
- 更新相关文档

#### 5. 提交代码

\`\`\`bash
git add .
git commit -m "feat: add new feature"
\`\`\`

提交信息格式:
\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

Type 类型:
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式
- `refactor`: 重构
- `test`: 测试
- `chore`: 构建/工具

#### 6. 推送到 GitHub

\`\`\`bash
git push origin feature/your-feature-name
\`\`\`

#### 7. 创建 Pull Request

1. 访问你的 Fork 仓库
2. 点击 "New Pull Request"
3. 填写 PR 描述
4. 等待 Review

## 开发规范

### 代码风格

项目使用 ESLint 和 Prettier 保持代码风格统一。

运行检查:
\`\`\`bash
pnpm lint
pnpm type-check
\`\`\`

### 组件开发

- 使用函数组件和 Hooks
- 添加 TypeScript 类型
- 组件要有清晰的职责
- 可复用组件放在 `components/` 目录

### 命名规范

- 文件: `kebab-case.tsx`
- 组件: `PascalCase`
- 函数: `camelCase`
- 常量: `UPPER_SNAKE_CASE`

### 提交规范

遵循 Conventional Commits 规范。

### 测试

- 为新功能添加测试
- 确保所有测试通过
- 保持测试覆盖率

## Pull Request 指南

### PR 标题

使用清晰的标题描述变更:

\`\`\`
feat: add user profile page
fix: resolve login redirect issue
docs: update API documentation
\`\`\`

### PR 描述

包含以下信息:

- **What**: 做了什么改动
- **Why**: 为什么要做这个改动
- **How**: 如何实现的
- **Testing**: 如何测试

模板:

\`\`\`markdown
## 改动说明

简要描述这个 PR 的目的。

## 改动类型

- [ ] Bug 修复
- [ ] 新功能
- [ ] 重构
- [ ] 文档更新

## 测试

描述如何测试这些改动。

## 截图

如果有 UI 改动，请提供截图。

## 相关 Issue

Closes #123
\`\`\`

### Review 流程

1. 自动 CI 检查通过
2. 至少一个维护者 Approve
3. 解决所有 Review Comments
4. 合并到主分支

## 社区规范

### 行为准则

- 尊重他人
- 友善沟通
- 接受建设性批评
- 关注项目整体利益

### 沟通渠道

- GitHub Issues: Bug 报告和功能请求
- GitHub Discussions: 一般讨论
- Pull Requests: 代码 Review

## 开发环境

### 推荐工具

- **IDE**: VS Code
- **扩展**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript

### 本地开发

\`\`\`bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 运行测试
pnpm test

# 构建
pnpm build
\`\`\`

## 获取帮助

如果您在贡献过程中遇到问题:

1. 查看项目文档
2. 搜索现有 Issues
3. 创建新的 Issue 寻求帮助
4. 联系项目维护者

## 感谢

感谢所有为项目做出贡献的开发者！

您的贡献让这个项目变得更好。
