// //Question 1 create a class and constructor that takes complex and imiganiry part as input and set the real and imaginary part of the complex number
class complex{
  constructor(real,imaginary){
    this.real = real;
    this.imaginary = imaginary;
  }
}
let a = new complex(2,4);
let b = new complex(6,2);
// add complex  numbers  by creating a method
class complex{
  constructor(real,imaginary){
    this.real = real;
    this.imaginary = imaginary;
  }
  add(num){
    this.real = this.real + num.real;
    this.imaginary=this.imaginary + num.imaginary;
  }
}

let an = new complex(2,4);
let bm = new complex(6,2);
an.add(bn);
console.log('${an.real},${an.imaginary}i');
// Question 3 create a class student from a class human override a method and see changes
class human{
  constructor(name,favfood){
    this.name= name;
    this.favfood = favfood;
  }
  speak(){
    console.log(this.name + "human is speaking");
  }   
  }
class student extends human{
  speak(){
    console.log(this.name + "student is speaking");
  }
}
let s = new student("harry","bhindi");
s.speak();
//see if student is instance of human using instance of keyword
class human{
  constructor(name,favfood){
    this.name= name;
    this.favfood = favfood;
  }
  speak(){
    console.log(this.name + "human is speaking");
  }   
  }
class student extends human{
  speak(){
    console.log(this.name + "student is speaking");
  }
}
let s = new student("harry","bhindi");
s.speak();
console.log(s  instanceof human );  //returns true
//use getter setter method in question 1
class complex{
  constructor(real,imaginary){
    this.real = real;
    this.imaginary = imaginary;
  }
  add(num){
    this.real = this.real + num.real;
    this.imaginary=this.imaginary + num.imaginary;
  }
  get real(){
    return this.real;
  }
  get imaginary(){
   return this.imaginary;
  }
  set real(newReal){
    this.real=newReal;
  }
  set imaginary(newImaginary){
    this.imaginary = newImaginary;
  }
}

let a = new complex(2,4);
console.log(a.real,a.imaginary);
a.real = 10;
a.imaginary=2
let b = new complex(6,2);
a.add(b);
console.log('${a.real},${a.imaginary}i');