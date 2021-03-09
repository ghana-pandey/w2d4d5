
"use strict";

const assert = require("assert");
const arrays = require("./arrayAdden.js");
const arrays1=require("./getMiddle.js")
const array2=require("./movetoleft.js")
const array3=require("./arrayEqual.js");
const arrays4 = require("./stringTransform.js");
const arrays6 = require("./stringPalindrome");



/* 1.	Write a function addend(arr) that accepts an array of numbers as parameters and returns the sum of first and last elements of the array. */
describe("addend", function () {

    it("tests addend even number of elements", function () {
        assert.strictEqual(arrays.addends([-1, -100, 1, 2, 3, -55]), -58);
    });
    it("tests addend odd number of elements", function () {
        assert.strictEqual(arrays.addends([10, 2, 3, 4, 20]), 30);
    });

    describe("string transform", function () {

        it("Fox_Brown_Quick", function () {
               assert.strictEqual(arrays4.transformStr(["Quick", "Brown", "Fox"] ), "Fox_Brown_Quick");
           });
      
          it("4_3_2_1", function () {
              assert.strictEqual(arrays4.transformStr([1, 2, 3, 4] ), "4_3_2_1");
           });
       });


});

describe("getMiddle", function () {

    it("tests getMiddle even number of elements", function () {
        assert.strictEqual(arrays1.getMiddle([-1, -100, 1, 2, 3, -55]), 1.5);
    });
    it("tests getMiddle odd number of elements", function () {
        assert.strictEqual(arrays1.getMiddle([-10, 2, 3, 4, 20]), 3);
    });



});
describe("rotateLeft", function () {

    it("tests rotateLeft even number of elements", function () {
        assert.deepStrictEqual(array2.rotateLeft([-1, -100, 1, 2, 3, -55]), [-100, 1, 2, 3, -55, -1]);
    });
    it("tests rotateLeft odd number of elements", function () {
        assert.deepStrictEqual(array2.rotateLeft([-10, 2, 3, 4, 20]), [2, 3, 4, 20, -10]);
    });

});

describe("check element of Array",function()
{
it("test the element of the array",function(){
    assert.deepStrictEqual(array3.isArrayEqual([1,2,3,4],[1,2,3,4]),true)

});
it("test is failed",function(){
    assert.deepStrictEqual(array3.isArrayEqual([2,3,4],[1,2,3]),false)
});
});  
it("aba true", function () {
    assert.strictEqual(arrays6.checkStringPal(["a", "b", "a"]), true);
});
 it("abc false", function () {
     assert.strictEqual(arrays6.checkStringPal(["a", "b", "c"]), false);
  });
  it("rotator true", function () {
     assert.strictEqual(arrays6.checkStringPal(["r", "o", "t", "a", "t", "o", "r"]), true);
  });
