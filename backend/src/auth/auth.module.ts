import { Module } from '@nestjs/common';
import { AuthStrategy } from './jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt.auth.guard';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), ConfigModule],
  providers: [AuthStrategy, JwtAuthGuard],
  exports: [AuthStrategy, JwtAuthGuard],
})
export class AuthModule {}
