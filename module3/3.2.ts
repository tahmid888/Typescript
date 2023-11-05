{
// Inheritance -> Inherit one class property and method to another

class Person {
    name:string;
    age:number;
    address:string;

    constructor(name:string, age:number, address:string)
    {
        this.name = name
        this.age = age
        this.address = address
    }

    getSleep(numOfHours:number){
      console.log(`Hey!= ${this.name}`)
    }
}


class Student extends Person {
   

    constructor(name:string, age:number, address:string){
        super(name, age, address) // transfer child to parent  constructor
    }
    
}
const student1 = new Student('x' , 1, 'rtr')
// student1.


class Teacher extends Person {
   
    designation:string;

    constructor(name:string, age:number, address:string, designation:string)
    {   
        super(name, age, address)
        this.designation = designation
    }


    takeClass(numOfClass:number){
        console.log(`Take Class!= ${this.name}`)
    }
}
const teacher = new Teacher('x' , 1, 'rtr', 'teacher')
// teacher.




















}