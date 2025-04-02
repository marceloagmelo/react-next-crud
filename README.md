# CRUD usando React / Next

Criação de um CRUD para poder listar, criar, alterar e excluir clientes, que chama uma API Rest, que foi desenvolvida em Java, a mesma esta no seguinte respositório [https://github.com/marceloagmelo/java-crud](https://github.com/marceloagmelo/java-crud).

## Regras do CRUD de cliente

Criar:

- Se o cliente não existir, incluir.
- Se o cliente existir, exibe mensagem "Cliente já existe!".

Alterar:

- Se o cliente não existir, exibe mensagem "Cliente não encontrado!".
- Se o cliente existir, executar alteração.

Excluir:

- Se o cliente não existir, exibe mensagem "Cliente não encontrado!".
- Se o cliente existir, executar exclusão.

Listar:

- Listar os clientes cadastrados.

## Início

### Executar os containers de apoio para rodar a aplicação localmente:

```
./scripts/startContainersParcial.sh
```

Irão subir os containers abaixo:

- Mysql: Banco de dados do backend
- Adminer: Aplicação web para administrar o banco de dados
  > http://localhost:7070
      Servidor: mysql
      Usuário: root
      Senha: 12345
      Banco de Dados: crud
- Backend: Aplicação java que disponibiliza os endpoints

### Deploy do App

```bash
npm run dev
# ou
yarn dev
```

Abra o browser [http://localhost:3000](http://localhost:3000).

## Aplicação em Container

### Executar as aplicações com containers docker:

```
./scripts/startContainers.sh
```

Irão subir os containers abaixo:

- Mysql: Banco de dados do backend
- Adminer: Aplicação web para administrar o banco de dados
  > http://localhost:7070
      Servidor: mysql
      Usuário: root
      Senha: 12345
      Banco de Dados: crud
- Backend: Aplicação java que disponibiliza os endpoints
- App: A aplicação CRUD em react

Abra o browser [http://localhost](http://localhost).
