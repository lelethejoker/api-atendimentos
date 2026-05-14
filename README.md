### Refatoração Async/await
Migração de padrão Callback básico para async/await utilizando mySQL2/promise.

### Reutilização de Lógica
PUT E PATCH Utilizando a mesma lógica de atualização

### Organização do Router
Mudanças no Router para:

- Reduzir repetições
- Maior legibilidade
- Padronização do tratamento de erros
- Integração com mySQL2
- Substituição do driver legado mysql para o mysql2/promise

### Middleware Global de Erros

Implementação de middleware global para tratamento centralizado de erros utilizando `next(error)` do Express.

Benefícios:
- remoção de repetição nas rotas
- padronização das respostas de erro
- melhor manutenção da aplicação
- separação de responsabilidades

Exemplo de middleware:

```js
app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({
        erro: err.message
    });

});
```
