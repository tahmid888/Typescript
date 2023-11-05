
{

// Class in Typescript

class Animal {
   // class properties
  //public  name:string;
 // public  species:string;
  //public look:string;
// parameter types
    constructor(public name:string,  public species:string, public look:string){
        //this.name = name;
       // this.species = species;
       // this.look = look;
    }
  
    makeName(){  // methods 
        console.log(`Name: ${this.name}`)
    }
}

const dog = new Animal ('Doggy', 'dog', 'sound')
const cat = new Animal ('catty', 'cat', 'sound')
cat.makeName()
















}