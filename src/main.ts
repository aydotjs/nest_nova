import { Controller, Module, Get } from "@nestjs/common";
@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return " hi";
  }
}


@Module({
    controllers : [AppController]
})
class AppModule{
    
}