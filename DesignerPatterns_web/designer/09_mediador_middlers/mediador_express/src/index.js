const app = require("express")();
/* 
Digamos que queremos adicionar um cabeçalho à solicitação se
 o usuário acessar root '/'. Podemos adicionar este
 cabeçalho em um retorno de chamada de middleware.
*/
app.use("/", (req, res, next) => {
  req.headers["test-header"] = 1234;
  next();
});
/* 
O next método chama o próximo retorno de chamada no ciclo de 
solicitação-resposta. Estaríamos efetivamente criando uma
 cadeia de funções de middleware que ficam entre a solicitação
  e a resposta, ou vice-versa.
*/