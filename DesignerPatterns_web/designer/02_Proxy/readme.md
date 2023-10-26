<h2> Proxy </h2>

<p>
De modo geral, um proxy significa um substituto de outra pessoa. Em vez de falar diretamente com essa pessoa, você falará com o procurador que representará a pessoa que você estava tentando contatar. O mesmo acontece em JavaScript: em vez de interagir diretamente com o objeto alvo, interagiremos com o objeto Proxy.
</p>

<hr/>

<h3> Porque usar Proxy </h3>

<p>
O padrão Proxy sugere que você crie uma nova classe proxy com a mesma interface do objeto do serviço original. Então você atualiza sua aplicação para que ela passe o objeto proxy para todos os clientes do objeto original. Ao receber uma solicitação de um cliente, o proxy cria um objeto do serviço real e delega a ele todo o trabalho.
</p>

<h3>Como implementar </h3>
1 - Se não há uma interface do serviço pré existente, crie uma para fazer os objetos proxy e serviço intercomunicáveis. Extrair a interface da classe serviço nem sempre é possível, porque você precisaria mudar todos os clientes do serviço para usar aquela interface. O plano B é fazer do proxy uma subclasse da classe serviço e, dessa forma, ele herdará a interface do serviço.<br>
2 - Crie a classe proxy. Ela deve ter um campo para armazenar uma referência ao serviço. Geralmente proxies criam e gerenciam todo o ciclo de vida de seus serviços. Em raras ocasiões, um serviço é passado ao proxy através do construtor pelo cliente.<br>
3 - implemente os métodos proxy de acordo com o propósito deles. Na maioria dos casos, após realizar algum trabalho, o proxy deve delegar o trabalho para o objeto do serviço.<br>
4 - Considere introduzir um método de criação que decide se o cliente obtém um proxy ou serviço real. Isso pode ser um simples método estático na classe do proxy ou um método factory todo implementado.<br>
5 - considere implementar uma inicialização preguiçosa para o objeto do serviço.
<h3>Relaçoes com outros padroes:</h3>
<li>Com Adapter, você acessa um objeto existente por meio de uma interface diferente. Com Proxy, a interface permanece a mesma. Com Decorator, você acessa o objeto por meio de uma interface aprimorada.
<li>O Facade é parecido como o Proxy no quesito que ambos colocam em buffer uma entidade complexa e inicializam ela sozinhos. Ao contrário do Facade, o Proxy tem a mesma interface que seu objeto de serviço, o que os torna intermutáveis.
<li>O Decorator e o Proxy têm estruturas semelhantes, mas propósitos muito diferentes. Alguns padrões são construídos no princípio de composição, onde um objeto deve delegar parte do trabalho para outro. A diferença é que o Proxy geralmente gerencia o ciclo de vida de seu objeto serviço por conta própria, enquanto que a composição do decoradores é sempre controlada pelo cliente.
