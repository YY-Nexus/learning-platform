// API路由类型定义

import type { NextRequest } from "next/server"
import type { User, Course, Exam, Question } from "./index"

// API请求上下文
export interface ApiContext {
  user?: User
  params?: Record<string, string>
}

// API错误类
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

// API处理器类型
export type ApiHandler<T = any> = (req: NextRequest, context?: ApiContext) => Promise<Response | T>

// 认证相关API
export namespace AuthAPI {
  export interface LoginRequest {
    email: string
    password: string
  }

  export interface LoginResponse {
    user: User
    token: string
  }

  export interface RegisterRequest {
    email: string
    username: string
    password: string
  }

  export interface RegisterResponse {
    user: User
    token: string
  }
}

// 课程相关API
export namespace CourseAPI {
  export interface ListRequest {
    page?: number
    pageSize?: number
    category?: string
    level?: string
    search?: string
  }

  export interface ListResponse {
    courses: Course[]
    total: number
    page: number
    pageSize: number
  }

  export interface DetailRequest {
    id: string
  }

  export interface DetailResponse {
    course: Course
    isEnrolled: boolean
    progress?: number
  }

  export interface EnrollRequest {
    courseId: string
  }

  export interface EnrollResponse {
    success: boolean
    enrollmentId: string
  }
}

// 考试相关API
export namespace ExamAPI {
  export interface ListRequest {
    page?: number
    pageSize?: number
    category?: string
    difficulty?: string
  }

  export interface ListResponse {
    exams: Exam[]
    total: number
  }

  export interface StartRequest {
    examId: string
  }

  export interface StartResponse {
    attemptId: string
    questions: Question[]
    duration: number
  }

  export interface SubmitRequest {
    attemptId: string
    answers: Record<string, string | string[]>
  }

  export interface SubmitResponse {
    score: number
    totalQuestions: number
    correctAnswers: number
    passed: boolean
    certificateId?: string
  }
}

// 用户相关API
export namespace UserAPI {
  export interface ProfileResponse {
    user: User
    stats: {
      coursesCompleted: number
      examsCompleted: number
      certificates: number
      totalPoints: number
    }
  }

  export interface UpdateProfileRequest {
    displayName?: string
    bio?: string
    avatar?: string
  }

  export interface UpdateProfileResponse {
    user: User
  }
}
