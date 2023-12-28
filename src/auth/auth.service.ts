import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    delete user.password;

    const payload = { sub: user.id, username: user.username, role: user.role };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.SECRET_KEY,
        expiresIn: '1d',
      }),
    };
  }
}
