class Animal{
  constructor(name){
    this.name=name;
  }
  fly(){
    console.log("Hi I am flying");
  }
  get name(){
    return this.name;
  }
  set name(newName){
    this.name=newName;
  }
}
class rabbit extends Animal{
  eat(){
    console.log("HI I am eating carrot");
  }
}
let a = new rabbit("Bruno");
let anm = new Animal("lion");
anm.fly();
anm.name = "kitten";
console.log(anm.name);
let c= 32;
console.log(anm   instanceof Animal);  //returns true
console.log(c instanceof Animal);   //returns False
console.log(a instanceof rabbit);   //returns true