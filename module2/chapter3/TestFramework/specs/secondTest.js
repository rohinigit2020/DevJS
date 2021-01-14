import chai from 'chai';
const {expect,assert} = chai ;

describe('My details',()=>{
    it('my name',()=>{
        console.log('Rohini')
        expect('Rohini').to.equal('Rohi');
        //let a=[1,2,3]
        //let b = [1,2]
        //expect(a).to.include.members(b)
        //assert.equal('Rohini','Rohin','Expected is not actual')
    })
})