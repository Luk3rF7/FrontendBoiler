<h1>Mediador </h1>

<p>
O Mediator é um padrão de projeto comportamental que permite que você reduza as dependências caóticas entre objetos. O padrão restringe comunicações diretas entre objetos e os força a colaborar apenas através do objeto mediador.
</p>
<p>
O padrão Mediator sugere que você deveria cessar toda comunicação direta entre componentes que você quer tornar independentes um do outro. Ao invés disso, esses componentes devem colaborar indiretamente, chamando um objeto mediador especial que redireciona as chamadas para os componentes apropriados. Como resultado, os componentes dependem apenas de uma única classe mediadora ao invés de serem acoplados a dúzias de outros colegas.

No nosso exemplo com o formulário de edição de perfil, a classe diálogo em si pode agir como mediadora. O mais provável é que a classe diálogo já esteja ciente de todos seus sub-elementos, então você não precisa introduzir novas dependências nessa classe.

</p>
<li>Identifique um grupo de classes firmemente acopladas que se beneficiariam de estar mais independentes (por exemplo, para uma manutenção ou reutilização mais fácil dessas classes).
<li>Declare a interface do mediador e descreva o protocolo de comunicação desejado entre os mediadores e os diversos componentes. Na maioria dos casos, um único método para receber notificações de componentes é suficiente.

Essa interface é crucial quando você quer reutilizar classes componente em diferentes contextos. Desde que o componente trabalhe com seu mediador através da interface genérica, você pode ligar o componente com diferentes implementações do mediador.

<li>Implemente a classe concreta do mediador. Essa classe se beneficia por armazenar referências a todos os componentes que gerencia.
<li>Você pode ainda ir além e fazer que o mediador fique responsável pela criação e destruição de objetos componente. Após isso, o mediador pode montar uma fábrica ou uma fachada.
<li>Componentes devem armazenar uma referência ao objeto do mediador. A conexão é geralmente estabelecida no construtor do componente, onde o objeto mediador é passado como um argumento.
<li>Mude o código dos componentes para que eles chamem o método de notificação do mediador ao invés de métodos de outros componentes. Extraia o código que envolve chamar os outros componentes para a classe do mediador. Execute esse código sempre que o mediador receba notificações daquele componente.
