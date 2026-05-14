# API REST - Atendimento

API REST desenvolvida com Node.js, Express e mySQL para gerenciamento de atendimentos.

## Tecnologias utilizadas no projeto

- Node.js
- Express
- mySQL
- mysql2/promise

## Funcionalidades do projeto

- Listar os atendimentos
- Criar atendimentos novos
- Atualizar atendimentos já existentes
- Atualizar parcialmente atendimentos já existentes
- Deletar atendimentos

## Estrutura do projeto

```bash
controllers/
infraestrutura/
models/
routers/
```

## Padrões utilizados no projeto

- Arquitetura MVC
- Async/Await
- Pool de conexões mySQL
- Rotas Restful
- Tratamento de erros com middleware

## Melhorias implementadas (até agora)

### Refatoração Async/await
Migração de padrão Callback básico para async/await utilizando mySQL2/promise.

### Reutilização de Lógica
PUT E PATCH Utilizando a mesma lógica de atualização

### Organização do Router
Mudanças no Router para:
- Reduzir repetições
- Maior legibilidade
- Padronização do tratamento de erros

### Integração com mySQL2
Substituição do driver legado mysql para o mysql2/promise

### Sistema de Validação
- validação de dados obrigatórios
- validação de status
- validação de datas

### Tratamento de Erros Semântico
- implementação da classe AppError
- respostas HTTP padronizadas
- diferenciação entre erros 400/404/500

### Busca de Recursos
- busca geral de atendimentos
- busca individual por ID

## Instalação

```bash
npm install
```

## Executar projeto

```bash
npm run dev
```

ou

```bash
node index.js
```

## Rotas

### GET
```http
GET /atendimentos/:id
```

### POST
```http
POST /atendimentos
```

### PUT
```http
PUT /atendimentos/:id
```

### PATCH
```http
PATCH /atendimentos/:id
```

### DELETE
```http
DELETE /atendimentos/:id
```

## Próximas atualizações planejadas

- ~~Middleware global de erro~~
- ~~Validação de dados~~
- ~~Busca por ID~~
- ~~Busca geral~~
- JWT Authentication
- Paginação
- Filtros avançados
- Service Layer
- Testes automatizados
