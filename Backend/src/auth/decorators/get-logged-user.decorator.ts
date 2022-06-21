import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/domain/user/user.entity';

export const GetLoggedUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
