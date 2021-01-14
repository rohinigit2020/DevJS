import {Given,When,Then} from "@cucumber/cucumber"
import { assert, expect } from 'chai'

Given('Numbers are', function (dt) {
    console.log(dt.rows());
    console.log(dt.raw());
    console.log(dt.hashes()[0]['number'])
});

Given('name is {string}', function (name) {
    console.log('name is ', name)

});

Given('float is {float}', function (f) {
    console.log('float value is ', f)
});

Given('some data is {}', function (x) {
    console.log('float value is ', x)
});

Given('I have {int} Rupee(s)', function (ru) {       // optional text (s) for plural rupees
    console.log('I have money ', ru)
});


Given('I like shoes/sandles/handbags', function () {
    console.log("I like shoes or sandles or handbags")
});