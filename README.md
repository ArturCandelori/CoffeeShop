# CoffeeShop

https://coffeeshopartur.herokuapp.com/

Projeto com a stack MERN que simula o sistema interno de um café.
Funcionalidades:
- Listar, criar, editar e deletar produtos.
- Paginação
- Busca de produtos por nome
- Autenticação via JWT

É necessário login para acessar as páginas e os endpoints.
Para fazer o login:
email: admin@email.com
senha: 123456

Na raiz do projeto:
npm install

Também dentro da pasta frontend:
npm install

- rodar o app (front e back):
npm run dev

- rodar só o back:
npm run server

- rodar só o front:
npm run client

- resetar a lista de produtos:
npm run data:import

- apagar lista de produtos:
npm run data:destroy
