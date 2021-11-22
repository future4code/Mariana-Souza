### Exercício 1
a) 
CREATE TABLE Actor => cria uma tabela com o nome Actor
As próximas linhas da query criam variáveis com os nomes descritos e suas propriedades.
VARCHAR() => cria variável que armazena strings, com o numero entre () sendo o número de caracteres permitido
DATE => cria uma variável que armazena datas
PRIMARY KEY =>  define a coluna como a chave da tabela.
NOT NULL => torna a inserção de dados nessa coluna obrigatória.

b) SHOW DATABASES mostra todos os bancos de dados na conexão. 
SHOW TABLES mostra todas as tabelas do banco de dados.

c)DESCRIBE Actor mostra a estrutura da tabela, detalhando todas as colunas e tipos dos dados.



### Exercício 2
a) A query é:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  120000,
  "1963-08-23", 
  "female"
);

b) Ao tentar inserir outro dado com o mesmo id, aparece a seguinte mensagem de erro: 'Error Code: 1062. Duplicate entry '002' for key 'PRIMARY''. Ou seja, o dado que foi declarado como primary key já possui uma entrada 002, este não pode se repetir. Para corrigi-lo, é necessário informar outro valor para id.


c)Mensagem de erro: 'Error Code: 1136. Column count doesn't match value count at row 1'
Contagem de colunas é diferente da contagem de valores da query. Foram informados 3 valores na linha 1 da query, mas foram inseridos 5. Para corrigi-lo, podemos excluir da linha 1 as especificações de dados.
Query corrigida: 
INSERT INTO Actor
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d)Mensagem de erro: "Error Code: 1364. Field 'name' doesn't have a default value"
Marcamos todos os campos como not null, o que siginifica que nenhum pode ficar sem valor. Nessa query não tem valor nome, e ele não tem nenhum valor padrão definido, logo, ficou vazio. Para corrigi-lo, pode-se incluir um valor nome na query.
Query corrigida: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Leo",
  400000,
  "1949-04-18", 
  "male"
);

e)Mensagem de erro: "Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1"
A data precisa estar entre aspas.
Query corrigida: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Exercício 3
a)SELECT * FROM Actor WHERE gender = "female";

b)SELECT salary FROM Actor WHERE name = "Tony Ramos"

c)SELECT * FROM Actor WHERE gender = "invalid";
O resultado é nulo pois não existe nenhuma entrada na tabela onde gender = "invalid"

d)



