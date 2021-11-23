### Exercício 1
a) Exclui a coluna salary da tabela Actor

b)Altera o nome da coluna gender para sex e seu tipo para varchar(6)

c)Mantém o nome gender e altera o limite de caracteres da coluna para VARCHAR(255)

d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2
a)UPDATE Actor SET name = "Arlete Torres", birth_date = "1929-10-16" WHERE id = "003";

b)
SELECT * FROM Actor;
UPDATE Actor SET name = "JULIANA PAES" WHERE id = "005";
UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";

c)UPDATE Actor
SET name="Ju Paes", salary = 521000, birth_date="1975-05-28", gender = "male" 
WHERE id = "005";

d)A mensagem recebida foi: "0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0"
Não é uma mensagem de erro, porque não houve um erro, o comando é válido. Mas nenhuma linha que atendesse à condição imposta foi encontrada, logo, nenhuma linha foi alterada.

### Exercício 3
a)DELETE FROM Actor WHERE name = "Arlete Torres";

b)DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### Exercício 4
a)SELECT MAX(SALARY), MIN(SALARY) FROM  Actor; 

b)SELECT MIN(salary) FROM Actor WHERE gender = "female";

c)SELECT COUNT(*) FROM Actor WHERE gender = "female";

d)SELECT SUM(salary) FROM Actor;

### Exercício 5

a)SELECT COUNT(*), gender FROM Actor GROUP BY gender;



