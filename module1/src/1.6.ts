{ // brackets for block scoop
// Function 
// Normal Function 

function add(num1 : number , num2 : number=10) : number{
    return num1 + num2;
}

add(2 , 3)
// Arrow Function 
const arrowFunction = (num1 :number , num2 : number) : number => num1 + num2

// function -> Object ->> Methods

const user ={
    name: 'Tahmid',
    balance: 0,
    addBalance(balance : number): string { // anonymous function  
        return `My Total Balance: ${this.balance + balance}`
    },
}

// 
const array : number[] = [1,2,3];
const newArray : number[] = array.map((elem:number) : number => elem * elem)






}