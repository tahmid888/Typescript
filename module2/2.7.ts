{
// generic constrain with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    ship:string;
}
type Owner = 'bike' | 'car' | 'ship' // manually 
type Owner2 = keyof Vehicle // keyof operator


const getPropertyByValue = <X, Y extends keyof X> (obj:X, key:Y) => {

    return obj[key]
}

const car = {
    model: 'BMW',
    year:2011,
}
const result1 = getPropertyByValue(car , 'model')

















}