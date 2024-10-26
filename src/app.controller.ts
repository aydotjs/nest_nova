import { Controller, Get } from "@nestjs/common";
@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return "i dey greet";
  }
  @Get("admin")
  getAdminRoute() {
    return "hi whats up nest js, this is the admin";
  }
}
