"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
describe('Strategy', function () {
    it('should be named as firebase', function () {
        const strategy = new lib_1.Strategy({ audience: 'audience', issuer: 'issuer' }, function () {
            return 'hello';
        });
        expect(strategy.name).toEqual('firebase');
    });
});
