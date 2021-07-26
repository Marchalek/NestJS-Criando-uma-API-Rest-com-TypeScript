import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livrros.controller';
import { LivrosService } from './livros.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Livro } from './livro.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Raiodante@12',
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Livro])
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService]
})
export class AppModule {}
