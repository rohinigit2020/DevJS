let my ={
    name : 'Rohini',
    gender : "Female",
    age : '35',
    greet : function(){
        console.log(`Good morning ${this.name}`)
        console.log(this)
    }
}
my.greet()

let car = {
    name : 'Honda city',
    colour :'Red',
    info : function(){
        console.log(`this car name is ${this.name} and its colour is ${this.colour}`)
    }
}
car.info()