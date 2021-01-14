const {Given,When,Then, Before, After} = require("@cucumber/cucumber")

const {expect,assert} = require('chai')

let arr;

Before(function (){
    console.log("This prints before all the steps")
})

Given(': array is empty', function () {
    arr = [];
    console.log("array is zero")
});

Then(': the length of array should be {int}', function (len) {
    expect(arr).to.have.lengthOf(len);
    console.log("array length is",len)
});

When(': the array is loaded with elements {int},{int},{int}', function (a1, a2, a3) {
    arr.push(a1)
    arr.push(a2)
    arr.push(a3)
    console.log("array elements are added")
});

After(function (){
    console.log("This prints after all the steps")
})

// this is not needed as the first then is same as second with different argument
/* Then(': the length of the array should be {int}', function (num) {
    len = arr.length;
    assert.equal(len,num,"The length of the array is matched")
}); */