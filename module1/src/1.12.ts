{
// nullable type 

const searchName = (value: string|null) =>{
  if(value){
    console.log('Searching')
  }
  else{
    console.log('Not Searching')
  }
}
searchName(null)

// unknown type -> run  time 
const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
  //getSpeedInMeterPerSecond(null);
  getSpeedInMeterPerSecond('1000 kmh^-2');

// never type --> Nothing return but in that case it throw the error 
const errorThrow = (message:string): never => {
    throw new Error(message);  
}
errorThrow('Error is occurring right now...')








    
}