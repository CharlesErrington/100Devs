class BankAccount {
    constructor(name) {
      this.name = name;
      this.balance = 0;
    }
    // Attack a target
    credit(sum) {
        this.balance += sum;
    }
    // Return the character description
    describe() {
      console.log(`owner: ${this.name} balance: ${this.balance}`);
    }
  }

  const Sean = new BankAccount('Sean')
  const Brad  = new BankAccount('Brad ')
  const Georges = new BankAccount('Georges')

  let accounts = [Sean, Brad, Georges]

  accounts.forEach(account => account.credit(1000))

  console.log(accounts.forEach(account => account.describe()))
