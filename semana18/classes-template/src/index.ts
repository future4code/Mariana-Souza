import { BackgroundColor } from "chalk";
import { Bank, UserAccount } from "./types";




  const user1: UserAccount = new UserAccount("123456789-12", "Carol", 25);
  const user2: UserAccount = new UserAccount("123456789-33", "Nina", 30);
  const user3: UserAccount = new UserAccount("123456789-55", "Gabriel", 35);
  const user4: UserAccount = new UserAccount("123456789-99", "Maria", 40);

  const accounts = [user1, user2, user3, user4]
  const theBank: Bank = new Bank(accounts)
  console.log(theBank.getAccounts())


//O construtor serve para instaciar novos objetos da classe. Chamamos através da keyword new, ao criar o novo objeto.
//A frase foi impressa uma vez no console. Ao adicionar mais intâncias percebe-se que é impressa uma vez para cada adição.
//Criano métodos publicos para leitura de dados.


// <----EXERCICIO 2 ----->

