{ // ts-node-dev --respawn --transpile-only .\module2\2.8.ts
 // Asynchronous 
// promise
// string based promise
// const createPromise = (): Promise<string> => {
//     return new Promise<string>((resolve , reject)=>{
//         const data:string = 'something';
//         if(data){
//             resolve(data);
//         }else{
//             reject('failed to load')
//         }

//     })
// }

 // Object based promise 
// const createPromise = (): Promise<{something: string}> => {
//     return new Promise<{something: string}>((resolve , reject)=>{
//         const data:{something: string} = {something: 'something'};
//         if(data){
//             resolve(data);
//         }else{
//             reject('failed to load')
//         }

//     })
// }

//Json placeholder api
type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async(): Promise<Todo> =>{
const res  =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data =  await res.json();
return data
 // console.log(data)
  }
  getToDo();



 type Something = {something:string;}

const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve , reject)=>{
            const data:Something = {something: 'something'};
            if(data){
                resolve(data);
            }else{
                reject('failed to load')
            }
    
        })
    }
    

// calling createPromise Function
const showData = async (): Promise<Something> => {
    const data: Something= await createPromise();
    return data;
    //console.log(data)
}
showData();











}