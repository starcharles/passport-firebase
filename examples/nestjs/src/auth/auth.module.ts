import { Module } from '@nestjs/common';
import { FirebaseStrategy } from './firebase.strategy';
import { FirebaseAuthGuard } from './firebase-auth.guard';

@Module({
  imports: [],
  providers: [FirebaseStrategy, FirebaseAuthGuard],
  exports: [FirebaseAuthGuard],
})
export class AuthModule {}
