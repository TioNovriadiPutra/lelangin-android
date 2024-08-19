interface ApiResponse<T = string> {
  message: string;
  data?: T;
}

interface ApiErrorResponse {
  error: {
    message: ValidationError[] | string;
    code: string;
    status: number;
  };
}

interface ValidationError {
  rule: string;
  field: string;
  message: string;
}
