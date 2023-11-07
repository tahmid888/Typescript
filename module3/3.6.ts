{
    // getter and setter

    class BankAccount {
      public readonly id: number;
      public name: string;
      private _balance: number; // ACCESS within class
//  protected _balance: number; // can be access parent to child class 
  
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
      get balance() {
        return this._balance
      }
      set deposit(amount: number) {
        this._balance = this.balance + amount
      }
    //  public  addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    //   }
  
    //  public getBalance() {
    //     return this._balance;
    //   }
    }
  
  
     const personAccount = new BankAccount(111, "Mr. X", 200);
    // personAccount.addDeposit(0);
   // const myBalance = personAccount.getBalance(); // By calling function
   personAccount.deposit = 100; //set
   const myBalance = personAccount.balance; // calling like property(set)
    console.log(myBalance);





  }