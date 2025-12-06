export interface Team {
  id: string
  name: string
  description: string
  members: number
  category: string
  level: string
  image: string
  tags: string[]
  leader: string
  projects: number
}

export const teams: Team[] = [
  {
    id: "ai-lab",
    name: "AI创新实验室",
    description: "探索前沿AI技术，开发创新应用",
    members: 156,
    category: "研究",
    level: "高级",
    image: "/ai-----.jpg",
    tags: ["创新", "研究", "AI"],
    leader: "张教授",
    projects: 12,
  },
  {
    id: "prompt-alliance",
    name: "Prompt工程师联盟",
    description: "分享提示词技巧，交流最佳实践",
    members: 324,
    category: "实践",
    level: "中级",
    image: "/prompt-----.jpg",
    tags: ["Prompt", "交流", "实践"],
    leader: "李老师",
    projects: 28,
  },
  {
    id: "newbie-group",
    name: "新手学习小组",
    description: "零基础入门，共同成长进步",
    members: 589,
    category: "学习",
    level: "初级",
    image: "/------.jpg",
    tags: ["入门", "学习", "互助"],
    leader: "王同学",
    projects: 8,
  },
]

export function getTeamById(id: string): Team | undefined {
  return teams.find((team) => team.id === id)
}

export function getTeamsByLevel(level: string): Team[] {
  return teams.filter((team) => team.level === level)
}
