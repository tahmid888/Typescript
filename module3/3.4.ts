{

// instanceof guard

class Animal {
    name: string
    species:string

    constructor(name:string, species:string){
        this.name = name
        this.species = species
    }

    makeSound(){
        console.log('Make sound')
    }
}
class Dog extends Animal {
    constructor(name:string,species:string){
     super(name,species)
    }
    makeBark(){
        console.log('barking ')
    }
}
class Cat extends Animal {
    constructor(name:string,species:string){
     super(name,species)
    }
    makeMew(){
        console.log('mewwww')
    }
}
// smart way to check-> function 

const isDog = (animal: Animal) : animal is Dog=>{
    return animal instanceof Dog
}
const isCat = (animal: Animal) : animal is Cat =>{
    return animal instanceof Cat
}

const getAnimal = (animal: Animal) => {
        if(isDog(animal)){ 
            animal.makeBark();
        }
        else if(isCat(animal)){// instanceof guard uses
         animal.makeMew();
        }else{
            animal.makeSound();
        }
    }
    
// const getAnimal = (animal: Animal) => {
//     if(animal instanceof Dog){ 
//         animal.makeBark();
//     }
//     else if(animal instanceof Cat){// instanceof guard uses
//      animal.makeMew();
//     }else{
//         animal.makeSound();
//     }
// }


const dog = new Dog ('doggy' , 'dog')
const cat = new Cat ('catyy' , 'cat')

getAnimal(dog)






}