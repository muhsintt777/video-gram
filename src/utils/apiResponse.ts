export class ApiResponse<T> {
  statusCode: number;
  message: string;
  success: boolean;
  data: T;

  constructor(data: T, statusCode: number, message: string = "successfull") {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}
