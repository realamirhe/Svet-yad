export class ApiException {
  constructor(private readonly errorCode: string) {}

  getErrorCode() {
    return this.errorCode
  }
}
