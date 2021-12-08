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

d)SELECT id, name, salary FROM Actor WHERE salary <= 500000;

e)Mensagem de erro: "Error Code: 1054. Unknown column 'nome' in 'field list'"
Não existe o campo 'nome' entre as colunas da tabela. Para corrigi-lo, trocamos 'nome' por 'name'
Query corrigida: 
SELECT id, name from Actor WHERE id = "002"

### Exercício 4
a)SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
Essa query seleciona todas as informações (SELECT *) da tabela  de atores (FROM Actor) das linhas que atendem algumas condições (WHERE), sendo elas:
-que o nome comece com A ou J
-que o salário seja > 300000

b)SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000

c)SELECT * FROM Actor WHERE name LIKE "%g%";

d)SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%a%") AND (salary > 3500000 OR salary < 900000);

### Exercício 5
a)CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR (255) NOT NULL,
    sinopse TEXT,
    data_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);
A query cria a tabela com as colunas pedidas (id, titulo, sinopse, data e avalização) com seus tipos adequados ao tipo de dado que será recebido.

b)INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
"2006-01-06",
7
);

c)INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d)INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber 
de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

e)INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
"004",
"Marighela",
" Carlos Marighella, em 1969, um homem que não teve tempo pra ter medo. De um lado, uma violenta ditadura 
militar. Do outro, uma esquerda intimidada. Cercado por guerrilheiros 30 anos mais novos e dispostos a reagir, 
o líder revolucionário escolheu a ação. Marighella era político, escritor e guerrilheiro contra à ditadura militar 
brasileira.",
"2021-11-04",
10
);

### Exercício 6

a)Para retornar dados de filme com id 003: 
SELECT id, titulo, avaliacao FROM Filmes WHERE id="003" 

b)SELECT *FROM Filmes WHERE titulo = "Doce de Mãe";

c)SELECT id, titulo, sinopse FROM Filmes WHERE avaliacao > 7;

### Exercício 7

a)SELECT * FROM Filmes WHERE name LIKE "%vida%";

b)SELECT * FROM Filmes WHERE (name LIKE "%vida%" OR sinopse LIKE "%vida%");

c)SELECT * FROM Filmes WHERE (data_lancamento < "2021-11-23");,

d)SELECT * FROM Filmes 
WHERE (data_lancamento < "2021-11-23") 
AND (name LIKE "%vida%" OR sinopse LIKE "%vida%")
AND (avaliacao > 7);

