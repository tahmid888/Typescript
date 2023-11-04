{

// Type alias 
// object
type User1 ={
    name: string,
    age:number
}
const user2: User1 = {
    name: 'xyz',
    age:19
 }
    
 // interface 
interface User2 {
    name: string,
    age: number
}

// const user1: User2 = {
// name: 'xyz',
// age:19
//}
 // If Objects then -> type alias and interface can be used


 type UserRole1 = User1 & {role: string}; // type alias
 interface UserRole2 extends User2 {role : string}
//  interface UserRole2 extends User1 {role : string}

 const user1 : UserRole2 = {
    name: 'xyz' ,
    age: 12,
    role:'manager'
 }

  // array

 type Roll1 = number[] // type alias array 

interface Roll2 {  // interface array
    [index : number] : number
}

 const userRoll1: Roll2 = [1,2,3,4,5]
//  const userRoll1: Roll1 = [1,2,3,4,5]

// function 

type Add1 = (num1: number , num2: number) => number

interface Add2 {
(num1 : number , num2: number) :number
}

const add: Add2 = (num1 , num2) => num1 + num2











}