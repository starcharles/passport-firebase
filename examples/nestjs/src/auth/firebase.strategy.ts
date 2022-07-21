import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-firebase';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      issuer: 'https://securetoken.google.com/<YOUR_PROJECT_ID>',
      audience: '<YOUR_PROJECT_ID>',
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
