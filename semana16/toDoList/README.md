# To Do List


# ESTRUTURA DE DADOS

### Usuários 

- id
- name
- nickname
- email

### Tarefas

- id
- title
- description
- deadline
- status: "to do" || "doing" || "done"
- author
- assigness

##

# Criação de Tabelas - MySQL

```sql
    CREATE TABLE to_do_list_user (
		id VARCHAR(255) PRIMARY KEY, 
        name VARCHAR(255) NULL, 
        nickname VARCHAR(255) UNIQUE NOT NULL, 
        email VARCHAR(255) UNIQUE NOT NULL
    );
```

```sql
    CREATE TABLE to_do_list_task (
		id VARCHAR(255) PRIMARY KEY, 
        title VARCHAR(255) NOT NULL, 
        description TEXT NOT NULL, 
        status VARCHAR(255) NOT NULL DEFAULT "to_do",
        limit_date DATE NOT NULL,
        creator_user_id varchar(255) NOT NULL,
        FOREIGN KEY (creator_user_id) REFERENCES to_do_list_user(id)
    );
```

```sql
    CREATE TABLE to_do_list_responsible_user_task_relation (
		task_id VARCHAR(255),
        responsible_user_id VARCHAR(255),
        FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
        FOREIGN KEY (responsible_user_id) REFERENCES to_do_list_user(id)
    );
```

# ENDPOINTS

### Criar usuário

- Método: PUT
- Path: /user
- Body:    
    * name (obrigatório)
    * nickname (obrigatório)
    * email (obrigatório)

### Pegar usuário pelo ID

- Método: GET
- Path: /user/:id
- Body de resposta:    
    * id
    * nickname
    * retorna um erro se não encontrar

### Editar um usuário

- Método: POST
- Path: /user/edit/:id
- Body:    
    * name (opcional; não pode ser vazio)
    * nickname (opcional; não pode ser vazio)
    * email (opcional; não pode ser vazio)

### Criar tarefa

- Método: PuT
- Path: /task
- Body:    
    * title (obrigatório)
    * description (obrigatório)
    * deadline (obrigatório; formato DD/MM/YYYY)
    * authorId

### Pegar tarefa pelo ID

- Método: GET
- Path: /task/:id
- Body de resposta: 
    * id
    * title
    * description
    * deadline (formato DD/MM/YYYY)
    * status
    * authorId
    * authorNickname







