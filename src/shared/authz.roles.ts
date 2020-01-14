import { RolesBuilder} from 'nest-access-control';

export enum AuthzRoles {
    MANAGE_PROJECTS = 'MANAGE PROJECTS',
    MANAGE_OWN_PROJECTS= 'MANAGE OWN PROJECTES',
    MANAGE_USER = 'USER_MANAGER',
  }
  
  export const roles: RolesBuilder = new RolesBuilder();
  
  roles
    .grant(AuthzRoles.MANAGE_OWN_PROJECTS) // define new or modify existing role. also takes an array.
    .createOwn('project') // equivalent to .createOwn('video', ['*'])
    .deleteOwn('project')
    .readAny('project')
    .grant(AuthzRoles.MANAGE_PROJECTS) // switch to another role without breaking the chain
    .extend(AuthzRoles.MANAGE_OWN_PROJECTS) // inherit role capabilities. also takes an array
    .updateAny('project', ['title']) // explicitly defined attributes
    .deleteAny('project')
    .grant(AuthzRoles.MANAGE_USER)
    .createOwn('user')
    .deleteOwn('user')
    .updateAny('user')
    .readAny('user');