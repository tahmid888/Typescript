{
 // Interface generics 

 interface Developer<T, X = null> { // X= null; default value
    name: string,
    age: number,
    computer:{
        brand: string,
        value: string
    }
    smartWatch: T ,
    bike?: X
 }


 type EmilabWatch = {
    brand: string;
    model:number;
 }

 const poorDev: Developer<EmilabWatch> = {
    name: 'x',
    age: 12,
    computer:{
        brand: 'asus',
        value: 'idle'
    },
    smartWatch: {
        brand: 'tyc',
        model:12
    }

 }

 interface AppleWatch {
    brand: string;
    model: number;
    heartTrack: boolean;
    healthTrack: boolean;
 }
 interface Bike {
    model: string;
 }
 const richDev: Developer<AppleWatch ,Bike> = {
    name: 'x',
    age: 12,
    computer:{
        brand: 'asus',
        value: 'idle'
    },
    smartWatch: {
        brand: 'tyc',
        model:12,
        heartTrack: true,
        healthTrack: true,
    },
    bike: {
        model: 'yamaha-R15',
    }

 }















}