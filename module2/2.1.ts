{
// Type assertion  // type narrowing 

let anything : any ;
anything = 'Next Level';
anything = 2;
//(anything as string). // string type will show
//(anything as number). // number type will show

const kgToGm = (value:string | number) : string | number | undefined=> {
  if(typeof value === 'string'){
    const convertedValue = parseFloat(value)*1000 ;
    return `Converted Value Is: ${convertedValue}`;
  }
  if(typeof value === 'number'){
    return value*1000;
  }
}
const result1 = kgToGm(1000) as number;
const result2 = kgToGm('1000') as string;
 // type assertion where we know that the type is confirmed by us. whatever we assign as (assertion)

 //-------------------------------->
type CustomError = {
 message: string
}

 try{

 }catch(error){
console.log((error as CustomError).message)
 }











}