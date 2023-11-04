{
 // generics type --> TypeScript Generics is a tool which provides us a  way to create reusable components

type GenericArray<T> = Array<T>

//  const Array1: number[] = [1,2,3]
 //const Array1: Array<number> = [1,2,3] // Generics type
 const Array1: GenericArray<number> = [1,2,3] // Generics type
 const Array5: GenericArray<string> = ['X' ,'Y', 'Z']
 const Array2: string[] = ['X' ,'Y', 'Z']
 const Array3: boolean[] = [true, false]

// array of objects with Generic type.....


interface User2 { // interface 
    name: string,
    age: number,
}
const user2: GenericArray<User2> = [
    {
        name: 'x',
        age:20,
    },
    {
        name:'y',
        age: 21,
    },
]
type User = { // type alias 
    name: string,
    age: number,
}
const user: GenericArray<User> = [

    {
        name: 'x',
        age:20,
    },
    {
        name:'y',
        age: 21,
    },
]
 // need to write all things at a time 
const user1: GenericArray<{ name: string , age: number }> = [

    {
        name: 'x',
        age:20,
    },
    {
        name:'y',
        age: 21,
    },
]

// generics with tuple

type GenericTuple<X,Y> = [X,Y]  // Same things will not when tuple1 and 2 has different X,Y,Z

const tuple1: GenericTuple<string, string> = ['x' ,'y']
const tuple2: GenericTuple<number , {name:string , address:string , role: number}>= [ 421329 , {name: 'tahmid' , address: 'mirpur-2' , role:12}]















}