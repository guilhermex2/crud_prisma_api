<h1>CRUD API🚀</h1>
Este projeto é uma API RESTful desenvolvida com Node.js, Express e Prisma ORM, que permite operações CRUD 
(Create, Read, Update, Delete) para gerenciamento de usuários em um banco de dados PostgreSQL.
<h1>Tecnologias Utilizadas</h1>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Prisma</li>
  <li>PostgreSQL</li>
  <li>TypeScript</li>
  <li>Helmet</li>
  <li>CORS</li>
</ul>
<h1>Endpoints da API</h1>
<h3>Criar Usuário</h3>
<ul>
  <li>URL: <code>/createUser</code></li>
  <li>Método: <code>POST</code></li>
  <li>Descrição: Cria um novo usuário no banco de dados</li>
  <li>Implementação Atual: Valores fixos (nome: "Guilherme", email: "guilherme@gmail.com")</li>
  <li>Resposta de Sucesso: Objeto do usuário criado</li>
  <li>Resposta de Erro: Status 500 com mensagem de erro</li>
</ul>
<h3>Criar Usuários</h3>
<ul>
  <li>URL: <code>/createUsers</code></li>
  <li>Método: <code>POST</code></li>
  <li>Descrição: Cria varios usuarios no banco de dados</li>
  <li>Implementação Atual: Valores são recebidos pelo body da requisição</li>
  <li>Resposta de Sucesso: Objeto dos usuários criados</li>
  <li>Resposta de Erro: Status 500 com mensagem de erro</li>
</ul>
<h3>Listar Usuários</h3>
<ul>
  <li>URL: <code>/users</code></li>
  <li>Método: <code>GET</code></li>
  <li>Descrição: Retorna todos os usuários cadastrados</li>
  <li>Resposta: Array de objetos de usuário com id, name, email e roles</li>
</ul>
<h3>Listar Usuários específicos</h3>
<ul>
  <li>URL: <code>/readUsers</code></li>
  <li>Método: <code>GET</code></li>
  <li>Descrição: Retorna todos os usuários cadastrados que satisfaçam a condição where</li>
  <li>Resposta: Array de objetos de usuário com id, name, email e roles</li>
</ul>
<h3>Atualizar Usuários</h3>
<ul>
  <li>URL: <code>/updateUsers</code></li>
  <li>Método: <code>PUT</code></li>
  <li>Descrição: Atualiza usuários que possuem email terminando com "gmail.com"</li>
  <li>Implementação Atual: Define o valor de roles como "USER"</li>
  <li>Resposta: Objeto com informações sobre a operação de atualização</li>
</ul>
<h3>Excluir Usuários</h3>
<ul>
  <li>URL: <code>/deleteUser</code></li>
  <li>Método: <code>DELETE</code></li>
  <li>Descrição: Remove usuários que possuem email terminando com "gmail.com"</li>
  <li>Resposta: Objeto com informações sobre a operação de exclusão</li>
</ul>
<h1>Configuração do Servidor</h1>
<h3>O servidor Express é configurado com os seguintes middlewares:</h3>
<ul>
  <li>helmet: Para segurança de cabeçalhos HTTP</li>
  <li>cors: Para permitir requisições de diferentes origens</li>
  <li>express.json: Para parsing de requisições com JSON</li>
  <li>urlencoded: Para parsing de dados de formulários</li>
</ul>
  A porta do servidor é definida pela variável de ambiente <code>PORT</code> ou usa 3000 como padrão.
<h1>Configuração do Banco de Dados</h1>
A conexão com o banco de dados PostgreSQL é configurada através da variável de ambiente <code>DATABASE_URL</code> no arquivo .env.
<h1>Como Executar o Projeto</h1>
<ol>
  <li>Clone o repositório</li>
  <li>Instale as dependências:</li>
  <code>npm install</code>
  <li>Configure o arquivo <code>.env</code> com a URL do banco de dados:</li>
  <code>DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"</code>
  <li>Crei a tabela <strong>User</strong> no seu banco de dados:</li>
  <code>npx prisma db push</code>
  <li>Inicie o servidor:</li>
  <code>npm run dev</code>
</ol>


