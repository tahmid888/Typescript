{
// mapped type-> changing one type to another

const arrayOfNumber: number[] = [1,2,3]
//const arrayOfString: string[] = ['1', '2', '3']
const arrayOfString: string[] = arrayOfNumber.map(number => number.toString())
console.log(arrayOfString)

type AreaNumber ={
  height: number;
  width: number;
}
// keyof-> height | weight

// T => {height: string; width: number;}
// key => T['height']
// key => T['width']
type AreaString<T> = {
    [key in keyof T]: T[key]  // look-up
}
const area1: AreaString<{height: string; width: number;}> = {
    height: '1',
    width:1
}













}