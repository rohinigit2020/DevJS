// to throw a personalised exception
// custom error message 
//throw new Error('student failed')

let passFail = (marks)=>{
    if (marks<35){
        throw new Error(`Student failed with marks ${marks}`)
    }
    else if(marks < 60){
        throw new Error(`Student performance is Average with marks ${marks}`)
    }else {
        throw new Error(`Student passed with Distinction with marks ${marks}`)
    }
}

passFail(25)
passFail(40)
passFail(89)