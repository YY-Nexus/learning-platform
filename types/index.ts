// 用户相关类型
export interface User {
  id: string
  email: string
  username: string
  displayName: string
  avatar?: string
  bio?: string
  role: "student" | "teacher" | "admin"
  createdAt: Date
  updatedAt: Date
  lastLoginAt?: Date
  emailVerified: boolean
  isActive: boolean
}

export interface UserProfile extends User {
  phone?: string
  location?: string
  website?: string
  github?: string
  linkedin?: string
  twitter?: string
  totalPoints: number
  level: number
  completedCourses: number
  certificates: number
}

// 课程相关类型
export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  instructorId: string
  category: string
  level: "beginner" | "intermediate" | "advanced"
  duration: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  studentCount: number
  thumbnail: string
  tags: string[]
  chapters: Chapter[]
  prerequisites?: string[]
  learningOutcomes: string[]
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  isPublished: boolean
  isFeatured: boolean
}

export interface Chapter {
  id: string
  courseId: string
  title: string
  description: string
  order: number
  duration: string
  lessons: Lesson[]
  isLocked: boolean
}

export interface Lesson {
  id: string
  chapterId: string
  title: string
  description: string
  order: number
  duration: string
  type: "video" | "article" | "quiz" | "exercise" | "project"
  content: string
  videoUrl?: string
  resources?: Resource[]
  isCompleted: boolean
  isLocked: boolean
}

export interface Resource {
  id: string
  name: string
  type: "pdf" | "code" | "link" | "file"
  url: string
  size?: number
}

// 学习进度类型
export interface LearningProgress {
  userId: string
  courseId: string
  progress: number
  completedLessons: string[]
  currentLessonId?: string
  startedAt: Date
  lastAccessedAt: Date
  completedAt?: Date
  certificateId?: string
}

// 考试相关类型
export interface Exam {
  id: string
  title: string
  description: string
  category: string
  difficulty: "easy" | "medium" | "hard"
  duration: number
  passingScore: number
  totalQuestions: number
  questions: Question[]
  certificateId?: string
  attempts: number
  thumbnail: string
  tags: string[]
  createdAt: Date
  isActive: boolean
}

export interface Question {
  id: string
  examId: string
  type: "single" | "multiple" | "truefalse" | "essay"
  question: string
  options: string[]
  correctAnswer: string | string[]
  explanation?: string
  points: number
  difficulty: "easy" | "medium" | "hard"
  tags: string[]
}

export interface ExamAttempt {
  id: string
  userId: string
  examId: string
  score: number
  totalQuestions: number
  correctAnswers: number
  answers: ExamAnswer[]
  startedAt: Date
  completedAt?: Date
  duration: number
  passed: boolean
  certificateId?: string
}

export interface ExamAnswer {
  questionId: string
  answer: string | string[]
  isCorrect: boolean
  points: number
}

// 证书类型
export interface Certificate {
  id: string
  userId: string
  courseId?: string
  examId?: string
  title: string
  description: string
  issueDate: Date
  expiryDate?: Date
  certificateUrl: string
  verificationCode: string
  issuedBy: string
  credentialId: string
}

// 社区相关类型
export interface Team {
  id: string
  name: string
  description: string
  avatar: string
  memberCount: number
  maxMembers?: number
  category: string
  isPublic: boolean
  createdAt: Date
  createdBy: string
  tags: string[]
  projects: TeamProject[]
}

export interface TeamProject {
  id: string
  teamId: string
  title: string
  description: string
  status: "planning" | "in_progress" | "completed" | "archived"
  progress: number
  startDate: Date
  endDate?: Date
  members: string[]
  githubUrl?: string
}

export interface TeamMember {
  userId: string
  teamId: string
  role: "owner" | "admin" | "member"
  joinedAt: Date
  contribution: number
}

// 成就系统类型
export interface Achievement {
  id: string
  title: string
  description: string
  category: string
  icon: string
  points: number
  rarity: "common" | "rare" | "epic" | "legendary"
  requirement: string
  unlockedBy: number
}

export interface UserAchievement {
  userId: string
  achievementId: string
  unlockedAt: Date
  progress: number
}

// 学习路径类型
export interface LearningPath {
  id: string
  title: string
  description: string
  difficulty: "beginner" | "intermediate" | "advanced"
  estimatedDuration: string
  courses: string[]
  thumbnail: string
  tags: string[]
  enrolledCount: number
  completionRate: number
}

// 通知类型
export interface Notification {
  id: string
  userId: string
  type: "info" | "success" | "warning" | "error"
  title: string
  message: string
  link?: string
  isRead: boolean
  createdAt: Date
}

// 分析数据类型
export interface Analytics {
  userId: string
  totalLearningTime: number
  coursesCompleted: number
  examsCompleted: number
  averageScore: number
  currentStreak: number
  longestStreak: number
  lastActiveDate: Date
  weeklyActivity: DailyActivity[]
}

export interface DailyActivity {
  date: string
  duration: number
  coursesAccessed: number
  lessonsCompleted: number
}

// API响应类型
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// 表单类型
export interface LoginForm {
  email: string
  password: string
  remember?: boolean
}

export interface RegisterForm {
  email: string
  username: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

export interface ProfileUpdateForm {
  displayName?: string
  bio?: string
  phone?: string
  location?: string
  website?: string
}

// 搜索和筛选类型
export interface SearchFilters {
  query?: string
  category?: string
  level?: string[]
  minPrice?: number
  maxPrice?: number
  rating?: number
  duration?: string
  tags?: string[]
  sortBy?: "popular" | "newest" | "rating" | "price"
  page?: number
  pageSize?: number
}

// 支付类型
export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: "pending" | "processing" | "succeeded" | "failed"
  courseId?: string
  userId: string
  createdAt: Date
}

export interface Order {
  id: string
  userId: string
  courseId: string
  amount: number
  status: "pending" | "completed" | "refunded" | "cancelled"
  paymentMethod: string
  createdAt: Date
  completedAt?: Date
}
