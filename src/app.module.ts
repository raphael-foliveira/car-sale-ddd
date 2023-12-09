import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllersModule } from './infrastructure/http/controllers/controllers.module';

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
    ControllersModule,
  ],
})
export class AppModule {}
