// things to note
// describe block & IT block


describe('This is sample test set',() => {
    it('This is First test',()=>{
   
        console.log("This is First Test")
    });
    
    it('This is Second test',()=>{
       
        console.log("This is Second Test")
    });
});

describe('This is sample test set Two',() => {
    it('This is First test',()=>{
   
        console.log("This is Third Test")
    });
    
    it('This is Second test',()=>{
       
        console.log("This is Fourth Test")
    })
})

// Simple test to print your name and age to console using Mocha

describe('Personal Info',() =>{
    it('displays Name',()=>{
        console.log(' My name is Rohini')
    })
    it('displays Age',()=>{
        console.log(' My age is 35')
    })
})


// Hooks 
// before first test block
// before- before Each Block
// after -after last test
// after each - after each test
describe("hooks", ()=>{

before('Before all test',()=>{  // this will be executed before all the tests
    console.log('before hook')
})
beforeEach('Before each test',()=>{
    console.log('Executes Before each')
})
after('After last test',()=>{
    console.log("executes after last test")
})
afterEach('after each test',()=>{
    console.log("executes after each test")
})
})
// skip the test case
// skip cases progress will be pending not passing
/* it.skip('this step skips during run',() => {
    console.log('we can skip a test using test.skip')
})
describe.skip('we can skip whole group of test') */