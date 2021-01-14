// let is blocked scope
// var is function scoped
function funLet(){
    let a = 2
    {
        let a = 3
        console.log(a)
    }
    console.log(a)
}
funLet()
function funVar(){
    var a=2
    {
        var a= 3
        console.log(a)
    }
    console.log(a)
}
funVar()