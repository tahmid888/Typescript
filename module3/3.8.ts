{
// polymorphism -> same methods in different class will show different output

class Person {

    getSleep(){
        console.log(`Sleep person `)
    }
}

class Student extends Person {

    getSleep(){
        console.log(`Sleep student `)
    }
}
class Developer extends Person {

    getSleep(){
        console.log(`Sleep Developer `)
    }
}

const getSleepinHours = (param : Person)=>{
param.getSleep()
}

const person = new Person()
const student = new Student()
const developer = new Developer()

getSleepinHours(person)
getSleepinHours(student)
getSleepinHours(developer)


 // Another Example---->>>
class Shape {
    getArea(): number {
      return 0;
    }
  }

  // pi*radius*radius
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // height * width
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape3);
  getShapeArea(shape2);
  getShapeArea(shape3);












}