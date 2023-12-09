import { Module } from '@nestjs/common';
import { OrmRepositoriesModule } from './infrastructure/repositories/orm/orm-repositories.module';
import { UseCasesModule } from './application/use-cases/use-cases.module';
import { ControllersModule } from './http/controllers/controllers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      host: 'db',
    }),
    OrmRepositoriesModule,
    UseCasesModule,
    ControllersModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
