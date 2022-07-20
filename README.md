# Passport Firebase
This Library added feature to support firebase jwt authentication.
Based on [passport-jwt](https://github.com/mikenicholson/passport-jwt).

## Install 

```
npm install passport-firebase 
or
yarn add passport-firebase
```

## How to Use
### In Express

#### 1. Initialize
An example configuration which reads the JWT from the http
Authorization header with the scheme 'bearer':

- <YOUT_PROJECT_ID>: unique identifier of your firebase project.
 
```js
const FirebaseStrategy = require('passport-firebase').Strategy;
const opts = {};
opts.issuer = 'https://securetoken.google.com/<YOUT_PROJECT_ID>';
opts.audience = '<YOUT_PROJECT_ID>';
passport.use(new FirebaseStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
```

#### 2. Authenticate requests

Use `passport.authenticate()` specifying `'firebase'` as the strategy.

```js
app.post('/profile', passport.authenticate('firebase', { session: false }),
    function(req, res) {
        res.send(req.user.profile);
    }
);
```

### In NestJS

- firebase.strategy.ts
```js
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-firebase';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      issuer: 'https://securetoken.google.com/<YOUT_PROJECT_ID>',
      audience: '<YOUT_PROJECT_ID>',
    });
  }

  async validate(payload: any) {
    return payload;
  }
}

```

- firebase-auth.guard.ts

```js
@Injectable()
export class FirebaseAuthGuard extends AuthGuard('firebase') {}
```

- controller.ts

```js
  @UseGuards(FirebaseAuthGuard)
  @Get('auth')
  getAuth(@Req() req: any): void {
    // user info can get by `req.user`
    console.log(req.user); 
  }
```

### Include the JWT in requests
    Authorization: bearer JSON_WEB_TOKEN_STRING.....

## Tests
    yarn install
    yarn test

## License

The [MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2022 Naoto Sato
