# Labecommerce

Sistema de gerenciamento de comércio eletrônico.

## Endpoints mínimos
##
### Cadastro de usuários

- **mysql**

    - **nome da tabela**: **`labecommerce_users`**
    - **colunas**:
        - **`id`**: string **(PRIMARY KEY)**
        - **`name`**: string
        - **`email`**: string
        - **`password`**: string
- **express**
    - **método**: **`post`**
    - **path: `/users`**
    - **id**: deve ser gerado pela própria aplicação em código
    - **parâmetros recebidos** via **`body`:**
        - **name**, **email** e **password**

### Busca por todos os usuários cadastrados
- **método: `get`**
- **path: `/users`**
- **sem parâmetros**
- deve trazer uma lista com **todos os** **usuários** cadastrados no banco

### Cadastro de produto
- **mysql**
    - **nome da tabela: `labecommerce_products`**
    - **colunas:**
        - **`id:`** string **(PRIMARY KEY)**
        - **`name:`** string
        - **`price:`** number
        - **`image_url:`** string
- **express**:
    - **método: `post`**
    - **path: `/products`**
    - **id:** deve ser gerado pela própria aplicação em código
    - **parâmetros recebidos** via **`body`**:
        - **name**, **price** e **image_url**
            

### Busca por todos os produtos cadastrados
- **método: `get`**
- **path: `/products`**
- **sem parâmetros**
- deve trazer uma lista com **todos os** **produtos** cadastrados no banco

### Registro de compra

- **mysql**:
    - **nome da tabela: `labecommerce_purchases`**
    - **colunas:**
        - **`id:`** string (PRIMARY KEY)
        - **`user_id:`** string (FOREIGN KEY) referencia uma `id` de `labecommerce_users`
        - **`product_id:`** string (FOREIGN KEY) referencia uma `id` de `labecommerce_products`
        - **`quantity:`** number
        - **`total_price:`** number
- **express**:
    - **método: `post`**
    - **path: `/purchases`**
    - **id:** deve ser gerado pela própria aplicação em código
    - **total_price:** deve ser calculado pela própria aplicação em código
    - **parâmetros recebidos** via **`body`**:
        - **`user_id`**, **`product_id`** e **`quantity`**

### Busca das compras de um usuário

- **método: `get`**
- **path: `/users/:user_id/purchases`**
- **parâmetro recebido** via **`path params`**:
    - **`user_id`**
- deve trazer uma lista com **todas as compras** de um determinado **usuário**

## Endpoints desafio
##

### Busca por todos os produtos, com ordenação e busca por nome

- seja possível ordenar a lista dos produtos
    - a ordenação deve ser recebida via **query params**
        - a query deve se chamar **`order`**
        - pode ser **`asc`** (crescente) ou **`desc`** (decrescente)
        - exemplo de url ao ordenar de forma crescente:
            - **`http://localhost:3003/products?order=asc`**
    - caso nenhuma ordenação seja recebida, retorne todos os produtos sem ordenação
- seja possível buscar produtos conforme seu nome
    - o termo de busca deve ser recebido via **query params**
        - a query deve se chamar **`search`**
        - exemplo de url ao buscar pelo termo "headset":
            - **`http://localhost:3003/products?search=headset`**
    - caso nenhum termo de busca seja recebido, retorne todos os produtos

### Busca por todos os usuários, retornando também as compras de cada usuário