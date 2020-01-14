import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthzRoles } from './authz.roles';

@Injectable()
export class AuthzGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    
    if (req.user.id == 1) {
        req.user.roles = [AuthzRoles.MANAGE_PROJECTS,AuthzRoles.MANAGE_USER];
    } else if (req.user.id == 2) {
        req.user.roles = [AuthzRoles.MANAGE_OWN_PROJECTS];
    }
    
    return true;
  }
}