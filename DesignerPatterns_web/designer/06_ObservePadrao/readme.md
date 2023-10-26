<h1> Padrão Observer</h1>

<p>
Com o padrão observador , podemos inscrever certos objetos, os observadores , em outro objeto, chamado de observável . Sempre que ocorre um evento, o observável notifica todos os seus observadores!
</p>
<li>1 - Olhe para sua lógica do negócio e tente quebrá-la em duas partes: a funcionalidade principal, independente de outros códigos, irá agir como publicadora; o resto será transformado em um conjunto de classes assinantes.
<li>2 - Declare a interface do assinante. No mínimo, ela deve declarar um único método atualizar
<li>3 -  Declare a interface da publicadora e descreva um par de métodos para adicionar um objeto assinante e removê-lo da lista. Lembre-se que publicadoras somente devem trabalhar com assinantes através da interface do assinante.
<li>4 - Decida onde colocar a lista atual de assinantes e a implementação dos métodos de inscrição. Geralmente este código se parece o mesmo para todos os tipos de publicadoras, então o lugar óbvio para colocá-lo é dentro de uma classe abstrata derivada diretamente da interface da publicadora. Publicadoras concretas estendem aquela classe, herdando o comportamento de inscrição.
Contudo, se você está aplicando o padrão para uma hierarquia de classe já existente, considere uma abordagem baseada na composição: coloque a lógica da inscrição dentro de um objeto separado, e faça todos as publicadoras reais usá-la.
<li>5 - Crie as classes publicadoras concretas. A cada vez que algo importante acontece dentro de uma publicadora, ela deve notificar seus assinantes.
<li>6 - Implemente os métodos de notificação de atualização nas classes assinantes concretas. A maioria dos assinantes precisarão de dados contextuais sobre o evento. Eles podem ser passados como argumentos do método de notificação.
Mas há outra opção. Ao receber uma notificação, o assinante pode recuperar os dados diretamente da notificação. Neste caso, a publicadora deve passar a si mesma através do método de atualização. A opção menos flexível é ligar uma publicadora ao assinante permanentemente através do construtor.
<li>7 - O cliente deve criar todas os assinantes necessários e registrá-los com suas publicadoras apropriadas.
