{
    // access modifiers
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
  
     public  addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }
  
     public getBalance() {
        return this._balance;
      }
    }
  
     // for protected modifier 
    // class StudentAccount extends BankAccount{
    //   test(){
    //     this.
    //   }
    // }
  
    const personAccount = new BankAccount(111, "Mr. X", 20);
    // personAccount.balance = 0;
    personAccount.addDeposit(0);
    const myBalance = personAccount.getBalance();
    console.log(myBalance);
  
    //
  }