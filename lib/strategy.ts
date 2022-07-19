import {
  ExtractJwt,
  Strategy as JwtStrategy,
  VerifyCallback,
} from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

type FirebaseStrategyOptions = {
  issuer: string;
  audience: string;
};

export class FirebaseStrategy extends JwtStrategy {
  public readonly name = 'firebase';

  constructor(options: FirebaseStrategyOptions, verify: VerifyCallback) {
    super(
      {
        secretOrKeyProvider: passportJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri:
            'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com',
        }),
        issuer: options.issuer,
        audience: options.audience,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        algorithms: ['RS256'],
      },
      verify
    );
  }
}
