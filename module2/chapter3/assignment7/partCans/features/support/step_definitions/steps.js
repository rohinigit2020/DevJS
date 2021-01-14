import { Given, When, Then } from "@cucumber/cucumber"
import { assert, expect } from 'chai'


Given('This is some prerequisite', function () {
    console.log('This is some background')
});


Given('number is {int}', function (num) {
    this.val = num;
    console.log("number is ", this.val)
});

When('number is incremented by {int}', function (x) {
    this.inc(x)
    console.log(`number is incremented by ${x} and became ${this.val}`)
});


Then('the number should be {int}', function (result) {
    console.log(`the number became ${this.getVal()}`)
    assert.equal(this.getVal(), result)

});
