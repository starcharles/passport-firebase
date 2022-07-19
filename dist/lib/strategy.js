"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const jwks_rsa_1 = require("jwks-rsa");
class FirebaseStrategy extends passport_jwt_1.Strategy {
    constructor(options, verify) {
        super({
            secretOrKeyProvider: (0, jwks_rsa_1.passportJwtSecret)({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com',
            }),
            issuer: options.issuer,
            audience: options.audience,
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            algorithms: ['RS256'],
        }, verify);
        this.name = 'firebase';
    }
}
exports.FirebaseStrategy = FirebaseStrategy;
