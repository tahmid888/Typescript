{
// type elias -> Reuse one to another based on need
// TYPE ta aage theke defined kore dite pari and bar bar use korte pari amader dorker e 
type Student = {
    name: string;
    age: number;
    contactNo?: string; // optional chaining operator 
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Mezba",
    age: 50,
    gender: "male",
    contactNo: "0170000000",
    address: "ctg",
  };

  const student2: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  const student3: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

 // functional type alias 

 type Add = (num1 : number , num2 : number) => number 
 const add: Add = (num1 , num2) => num1 + num2









}