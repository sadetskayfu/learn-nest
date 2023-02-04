import { NestFactory } from "@nestjs/core"
import { DocumentBuilder } from "@nestjs/swagger"
import { SwaggerModule } from "@nestjs/swagger/dist"
import { AppModule } from "./app.module"
import { ValidationPipe } from "./pipes/validation.pipe"


async function start() {
    const PORT = process.env.PORT || 4200
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('online-cinema')
        .setDescription('Documentation REST API')
        .setVersion('1.0.0')
        .addTag('YAROSLAW ISAKOW')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()