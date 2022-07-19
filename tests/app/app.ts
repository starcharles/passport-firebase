import express from 'express';
import { FirebaseStrategy } from '../../lib/strategy';
import passport from 'passport';

const app = express();

passport.use(
  new FirebaseStrategy(
    {
      issuer: 'issuer',
      audience: 'audience',
    },
    function (payload, done) {
      console.log(payload);
    }
  )
);
