"use strict"
const assert=require('assert')
const arrays6 = require("./stringPalindrome");
it("aba true", function () {
           assert.strictEqual(arrays6.checkStringPal(["a", "b", "a"]), true);
       });
        it("abc false", function () {
            assert.strictEqual(arrays6.checkStringPal(["a", "b", "c"]), false);
         });
         it("rotator true", function () {
            assert.strictEqual(arrays6.checkStringPal(["r", "o", "t", "a", "t", "o", "r"]), true);
         });

