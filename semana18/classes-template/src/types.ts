export class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];
 
   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }

   getName(): string{
      return this.name
   }
 
 }
 
 export type Transaction = {
   description: string,
   value: number,
   date: string
 }

export class transactions {
   private description: string;
   private value: number;
   private date: string;

   constructor(
      description: string,
      value: number,
      date: string ){
         this.description = description;
         this.value = value;
         this.date = date
   }

   getDescription(): string{
      return this.description
   }

   getValue(): number{
      return this.value
   }

   getDate(): string{
      return this.date
   }
}


export class Bank {
   private accounts: UserAccount[];
 
   constructor(accounts: UserAccount[]) {
     this.accounts = accounts;
   }

   getAccounts(){
      return this.accounts
   }
 
 }