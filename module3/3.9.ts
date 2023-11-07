{

// abstraction 1. interface   2. abstract class

// interface ->
// idea 
interface Vehicle1 {

    startEngine():void;
    stopEngine():void;
}

// real implementation
class Car implements Vehicle1 {

    startEngine():void{
        console.log(`Start Engineee`)
    }
    stopEngine(): void {
        console.log(`Stop Enginee`)
    }
    outSide(){
        console.log(`Outsider`)
    }
}


 const carEngine = new Car()
 carEngine.startEngine()

// abstract class --> can't create abstract classes with their objects/instances 

abstract class Car2 {

   abstract startEngine():void // can't implemented abstract methods
   abstract stopEngine(): void 
    outSide(){
        console.log(`Outsider`) // can be access through extends 
    }
}

class CarEngine extends Car2 {
    startEngine():void{
        console.log(`Start Engineee`)
    }
    stopEngine(): void {
        console.log(`Stop Enginee`)
    }
}

















}