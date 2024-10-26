import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
@Controller("greet")
class AppController {
  @Get()
  getRootRoute() {
    return " idey greet";
  }
  @Get("admin")
  getAdminRoute() {
    return "hi whats up nest js, this is the admin";
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
};

bootstrap();
