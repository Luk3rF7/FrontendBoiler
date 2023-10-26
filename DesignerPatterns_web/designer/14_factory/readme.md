<h1> Padrao factory </h1>

<p>
Com o padrão de fábrica podemos usar funções de fábrica para criar novos objetos. Uma função é uma função de fábrica quando retorna um novo objeto sem o uso da newpalavra-chave!

Digamos que precisamos de muitos usuários para nosso aplicativo. Podemos criar novos usuários com propriedades firstName, lastNamee email. A função de fábrica fullNametambém adiciona uma propriedade ao objeto recém-criado, que retorna o firstNamee o lastName.

</p>
<hr/>
<li>
  Faça todos os produtos implementarem a mesma interface. Essa interface deve declarar métodos que fazem sentido em todos os produtos.

<li>
Adicione um método fábrica vazio dentro da classe criadora. O tipo de retorno do método deve corresponder à interface comum do produto.

<li>
No código da classe criadora, encontre todas as referências aos construtores de produtos. Um por um, substitua-os por chamadas ao método fábrica, enquanto extrai o código de criação do produto para o método fábrica.

Pode ser necessário adicionar um parâmetro temporário ao método fábrica para controlar o tipo de produto retornado.

Neste ponto, o código do método fábrica pode parecer bastante feio. Pode ter um grande operador switch que escolhe qual classe de produto instanciar. Mas não se preocupe, resolveremos isso em breve.

<li>
Agora, crie um conjunto de subclasses criadoras para cada tipo de produto listado no método fábrica. Sobrescreva o método fábrica nas subclasses e extraia os pedaços apropriados do código de construção do método base.

<li>
e houver muitos tipos de produtos e não fizer sentido criar subclasses para todos eles, você poderá reutilizar o parâmetro de controle da classe base nas subclasses.

Por exemplo, imagine que você tenha a seguinte hierarquia de classes: a classe base Correio com algumas subclasses: CorreioAéreo e CorreioTerrestre; as classes Transporte são Avião, Caminhão e Trem. Enquanto a classe CorreioAéreo usa apenas objetos Avião, o CorreioTerrestre pode funcionar com os objetos Caminhão e Trem. Você pode criar uma nova subclasse (por exemplo, CorreioFerroviário) para lidar com os dois casos, mas há outra opção. O código do cliente pode passar um argumento para o método fábrica da classe CorreioTerrestre para controlar qual produto ele deseja receber.

<li>
Se, após todas as extrações, o método fábrica base ficar vazio, você poderá torná-lo abstrato. Se sobrar algo, você pode tornar isso em um comportamento padrão do método.

<h2> Relaçao com outro padroes </h2>
<li>
Muitos projetos começam usando o Factory Method (menos complicado e mais customizável através de subclasses) e evoluem para o Abstract Factory, Prototype, ou Builder (mais flexíveis, mas mais complicados).
<li>
Classes Abstract Factory são quase sempre baseadas em um conjunto de métodos fábrica, mas você também pode usar o Prototype para compor métodos dessas classes.
<li>
Você pode usar o Factory Method junto com o Iterator para permitir que uma coleção de subclasses retornem diferentes tipos de iteradores que são compatíveis com as coleções.
<li>
O Prototype não é baseado em heranças, então ele não tem os inconvenientes dela. Por outro lado, o Prototype precisa de uma inicialização complicada do objeto clonado. O Factory Method é baseado em herança mas não precisa de uma etapa de inicialização.
<li>
O Factory Method é uma especialização do Template Method. Ao mesmo tempo, o Factory Method pode servir como uma etapa em um Template Method grande.
