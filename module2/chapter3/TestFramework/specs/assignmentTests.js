// Mocha tests for 3 greater than 4
// Array [8,9,11,23] length is 4
// strict equal 101 to '101'
// Array ['a','b','c'] contains 'c'

import chai from 'chai';
const {expect,assert} = chai ;

describe('Assignments Tests',() => {
    it('3 greater than 4',()=>{
        console.log("This is Comparision Test")
        assert.isAbove(3,4,'3 is greater than 4')
    });
    
    it('Array [8,9,11,23] length is 4',()=>{
        console.log("This is Array length Test")
        let arr = [8,9,11,23];
        let len = arr.length;
        assert.equal(len,'4','array length is not equal to 4')
    });

    it(`strict equal 101 to '101'`,()=>{
       console.log("This is Comparing strict equal Test")
       assert.strictEqual(101,'101','Either value or data type is different')
    });

    it(`Array ['a','b','c'] contains 'c'`,()=>{
        let arrStr = ['a','b','c']
        console.log("This Array includes Test")
        assert.include(arrStr,'c','C is included in the array')
    }); 
});

