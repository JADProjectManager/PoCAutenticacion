import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './shared/authz.roles';

@Module({
  imports: [AccessControlModule.forRoles(roles),ProjectModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
