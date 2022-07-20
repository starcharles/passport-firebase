import { Strategy } from '../lib';

describe('Strategy', function () {
  it('should be named as firebase', function () {
    const strategy = new Strategy({audience: 'audience', issuer: 'issuer'}, function () {
      return 'hello'
    });

    expect(strategy.name).toEqual('firebase');
  });
});
