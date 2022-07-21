import { Strategy as JwtStrategy, VerifyCallback } from 'passport-jwt';
declare type FirebaseStrategyOptions = {
    issuer: string;
    audience: string;
};
export declare class FirebaseStrategy extends JwtStrategy {
    readonly name = "firebase";
    constructor(options: FirebaseStrategyOptions, verify: VerifyCallback);
}
export {};
