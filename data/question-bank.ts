import type { Question } from "@/lib/exam-utils"

export const aiBasicsQuestions: Question[] = [
  {
    id: "ai-1",
    text: "什么是机器学习？",
    options: ["一种让计算机自动学习和改进的方法", "一种编程语言", "一种数据库系统", "一种网络协议"],
    correctAnswer: "一种让计算机自动学习和改进的方法",
    explanation: "机器学习是人工智能的一个分支，它使计算机能够在没有明确编程的情况下学习和改进。",
    difficulty: "easy",
    category: "AI基础",
  },
  {
    id: "ai-2",
    text: "深度学习是基于什么模型？",
    options: ["决策树", "神经网络", "支持向量机", "朴素贝叶斯"],
    correctAnswer: "神经网络",
    explanation: "深度学习是基于人工神经网络的机器学习方法，特别是深层神经网络。",
    difficulty: "medium",
    category: "AI基础",
  },
  {
    id: "ai-3",
    text: "监督学习需要什么类型的数据？",
    options: ["未标记数据", "标记数据", "图像数据", "文本数据"],
    correctAnswer: "标记数据",
    explanation: "监督学习需要带有标签的训练数据，以便模型能够学习输入和输出之间的映射关系。",
    difficulty: "easy",
    category: "AI基础",
  },
]

export const promptEngineeringQuestions: Question[] = [
  {
    id: "prompt-1",
    text: "什么是零样本提示（Zero-shot Prompting）？",
    options: ["不提供任何示例的提示", "提供一个示例的提示", "提供多个示例的提示", "不使用提示"],
    correctAnswer: "不提供任何示例的提示",
    explanation: "零样本提示是指直接向模型提问，不提供任何示例或上下文的提示技术。",
    difficulty: "medium",
    category: "Prompt工程",
  },
  {
    id: "prompt-2",
    text: "思维链提示（Chain-of-Thought）的主要作用是什么？",
    options: ["加快模型响应速度", "引导模型进行逐步推理", "减少token使用", "提高模型准确率"],
    correctAnswer: "引导模型进行逐步推理",
    explanation: "思维链提示通过引导模型展示推理过程，帮助模型更好地处理复杂问题。",
    difficulty: "medium",
    category: "Prompt工程",
  },
]

export const aiDevelopmentQuestions: Question[] = [
  {
    id: "dev-1",
    text: "什么是模型过拟合（Overfitting）？",
    options: [
      "模型在训练数据上表现好，但在新数据上表现差",
      "模型在所有数据上表现都差",
      "模型训练时间过长",
      "模型参数过少",
    ],
    correctAnswer: "模型在训练数据上表现好，但在新数据上表现差",
    explanation: "过拟合是指模型过度学习了训练数据的特征，导致泛化能力下降。",
    difficulty: "hard",
    category: "AI开发",
  },
  {
    id: "dev-2",
    text: "GPU在AI训练中的主要优势是什么？",
    options: ["低功耗", "并行计算能力", "存储容量大", "价格便宜"],
    correctAnswer: "并行计算能力",
    explanation: "GPU具有大量并行处理单元，非常适合处理深度学习中的矩阵运算。",
    difficulty: "medium",
    category: "AI开发",
  },
]

export function getAllQuestions(): Question[] {
  return [...aiBasicsQuestions, ...promptEngineeringQuestions, ...aiDevelopmentQuestions]
}

export function getQuestionsByExamId(examId: string): Question[] {
  switch (examId) {
    case "ai-basics":
      return aiBasicsQuestions
    case "prompt-engineer":
      return promptEngineeringQuestions
    case "ai-development":
      return aiDevelopmentQuestions
    default:
      return []
  }
}
