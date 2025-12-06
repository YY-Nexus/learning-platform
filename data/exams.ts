export interface Exam {
  id: string
  title: string
  description: string
  duration: number
  totalQuestions: number
  passingScore: number
  difficulty: "beginner" | "intermediate" | "advanced"
  category: string
  image: string
  tags: string[]
}

export const exams: Exam[] = [
  {
    id: "ai-basics",
    title: "AI基础知识测试",
    description: "测试AI基础概念、机器学习基础和常见算法的理解",
    duration: 3600,
    totalQuestions: 50,
    passingScore: 70,
    difficulty: "beginner",
    category: "AI基础",
    image: "/ai------.jpg",
    tags: ["AI", "基础", "入门"],
  },
  {
    id: "prompt-engineer",
    title: "Prompt工程师认证考试",
    description: "评估提示词工程能力、AI交互技巧和实战应用",
    duration: 5400,
    totalQuestions: 80,
    passingScore: 75,
    difficulty: "intermediate",
    category: "Prompt工程",
    image: "/prompt-----.jpg",
    tags: ["Prompt", "工程师", "认证"],
  },
  {
    id: "ai-development",
    title: "AI应用开发综合测评",
    description: "全面考察AI应用开发、模型训练和部署能力",
    duration: 7200,
    totalQuestions: 100,
    passingScore: 80,
    difficulty: "advanced",
    category: "AI开发",
    image: "/ai--------.jpg",
    tags: ["开发", "应用", "综合"],
  },
]

export function getExamById(id: string): Exam | undefined {
  return exams.find((exam) => exam.id === id)
}

export function getExamsByDifficulty(difficulty: string): Exam[] {
  return exams.filter((exam) => exam.difficulty === difficulty)
}

export function getExamsByCategory(category: string): Exam[] {
  return exams.filter((exam) => exam.category === category)
}
