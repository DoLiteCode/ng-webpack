export class LoggingService {
  consoleUpdateOP(status:string) {
    console.log(`A service status changed, new status: ${status}`);
  }
  consoleNewOP(status:string) {
    console.log(`A new account is added. status: ${status}`);
  }
}