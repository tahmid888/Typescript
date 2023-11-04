{
// functions with generics 

const arrayFunc = (param: string): string[] => {

    return [param]
}
const result1 = arrayFunc('bd')

// generic
const arrayFuncGeneric = <T>(param: T): T[] => {

    return [param]
}
const resultGeneric = arrayFuncGeneric<string>('bd')
const resultGeneric2 = arrayFuncGeneric<boolean>(true)
// const resultGeneric3 = arrayFuncGeneric<{name:string; age:number}>({name: 'x', age:12})

type User = { // type alias 
    name:string; age:number
}
interface User1 { // interface
    name:string; age:number;
}
const resultGeneric3 = arrayFuncGeneric<User>({name: 'x', age:12})


// generics with tuple 
const arrayFuncWithTuple = <T,X>(param1: T, param2: X): [T,X] => {

    return [param1 , param2]
}
const resultGenericTuple = arrayFuncWithTuple<string , string>('bd', 'az')
 const resultTuple = arrayFuncWithTuple<string, {name:string , age:number}>('str',{name: 'x', age:12})


// practice 
 const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });



}