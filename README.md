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
GET /atendimentos
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
- Validação de dados
- JWT Authentication
- Paginação
- Filtros
- Service Layer
- Testes automatizados
