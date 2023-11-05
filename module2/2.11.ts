{

// utility type--->

// pick -> Pick one item to another 
type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, 'name'|'age'>

// omit
type ContactInfo = Omit<Person, 'name'|'age'>

//Require-> All property of person need to require including optional chaining

type PersonRequired = Required<Person>
// partial-> everything will be optional
type PersonPartial = Partial<Person>


// readonly ->  cann't change Readonly property
type PersonReadOnly = Readonly<Person>
const person1:PersonReadOnly = {
name:'x',
age:12,
contactNo:'018'
}
//person1.name = 'y'//  Can't change because of Readonly 


//Record-> fixed keys with their typed

// type Myobj = {
//     a:string,
//     b:string
// } 
type MyObj  = Record<string,string>

const EmptyObj : Record<string,unknown>={} // <string type, anything type not specify>

const obj1: MyObj = {
    a:'aa',
    b:'bb',
    c:'cc',
    d:'dd'
    //e:1. // cann't because Record is <string, string>
}











}