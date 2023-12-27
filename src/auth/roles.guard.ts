import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Roles } from './roles.decorator';
import { Reflector } from '@nestjs/core';

const matchRoles: any = (roles: any, userRole: any) => {
  return roles.includes(userRole);
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler());
    console.log('🚀  roles:', roles);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user || 'admin';
    return matchRoles(roles || [], user);
  }
}
