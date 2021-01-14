import {Given,When,Then} from "@cucumber/cucumber"
import {assert,expect} from 'chai'


//let a ,b,sum;

Given('The two numbers are {int} and {int}', function (num1, num2) {
   this.setVal(num1,num2)
});

/* When('Both the numbers are added', function () {
    this.sum()
}); */


Then('The result should be {int}', function (result) {
    assert.equal(this.result(),result)
    
});
