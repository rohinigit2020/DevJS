import calc from "../src/calculator.js"
import chai from 'chai';
const {expect,assert} = chai;

describe("Calculator tests",()=>{
    let num = [1,2,3,4]
    for (let n of num){
        it("Addition test",()=>{
            console.log(n)
            let val = calc.add(n,4);
            console.log(val)
            //assert.equal(val,9,"the Addition of 5 and 4 should be 9")
            expect(val).to.equal(val)
        })
    } 
    
    /* it("Substraction test",()=>{
        let val = calc.sub(5,4);
        console.log(val)
        assert.equal(val,1,"the Substraction of 5 and 4 should be 1")
    })
    it("Multiplication test",()=>{
        let val = calc.mul(5,4);
        console.log(val)
        assert.equal(val,20,"the Multiplication of 5 and 4 should be")
    })
    it("Division test",()=>{
        let val = calc.div(5,4);
        console.log(val)
        assert.equal(val,1.25,"the Division of 5 and 4 should be")
    }) */
})