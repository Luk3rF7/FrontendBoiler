<h1>Prototype </h1>

<p>
O padrão protótipo é uma forma útil de compartilhar propriedades entre muitos objetos do mesmo tipo. O protótipo é um objeto nativo do JavaScript e pode ser acessado por objetos por meio da cadeia de protótipos.

Em nossas aplicações, muitas vezes temos que criar muitos objetos do mesmo tipo. Uma maneira útil de fazer isso é criar múltiplas instâncias de uma classe ES6

</p>
<h2>Como aplicar</h2>
1 - Crie uma interface protótipo e declare o método clonar nela. Ou apenas adicione o método para todas as classes de uma hierarquia de classes existente, se você tiver uma.

2 - Uma classe protótipo deve definir o construtor alternativo que aceita um objeto daquela classe como um argumento. O construtor deve copiar os valores de todos os campos definidos na classe do objeto passado para a nova instância recém criada. Se você está mudando uma subclasse, você deve chamar o construtor da classe pai para permitir que a superclasse lide com a clonagem de seus campos privados.

Se a sua linguagem de programação não suporta sobrecarregamento de métodos, você pode definir um método especial para copiar os dados do objeto. O construtor é um local mais conveniente para se fazer isso porque ele entrega o objeto resultante logo depois que você chamar o operador new.

3 - O método de clonagem geralmente consiste em apenas uma linha: executando um operador new com a versão protótipo do construtor. Observe que toda classe deve explicitamente sobrescrever o método de clonagem and usar sua própria classe junto com o operador new. Do contrário, o método de clonagem pode produzir um objeto da classe superior.

4 - Opcionalmente, crie um registro protótipo centralizado para armazenar um catálogo de protótipos usados com frequência.

Você pode implementar o registro como uma nova classe factory ou colocá-lo na classe protótipo base com um método estático para recuperar o protótipo. Esse método deve procurar por um protótipo baseado em critérios de busca que o código cliente passou para o método. O critério pode ser tanto uma string ou um complexo conjunto de parâmetros de busca. Após o protótipo apropriado ser encontrado, o registro deve cloná-lo e retornar a cópia para o cliente.

Por fim, substitua as chamadas diretas para os construtores das subclasses com chamadas para o método factory do registro do protótipo

<h2>Relação com outros Padroes </h2>

<li>Muitos projetos começam usando o Factory Method (menos complicado e mais customizável através de subclasses) e evoluem para o Abstract Factory, Prototype, ou Builder (mais flexíveis, mas mais complicados).
<li>Classes Abstract Factory são quase sempre baseadas em um conjunto de métodos fábrica, mas você também pode usar o Prototype para compor métodos dessas classes.
<li>O Prototype pode ajudar quando você precisa salvar cópias de comandos no histórico.
<li>Projetos que fazem um uso pesado de Composite e do Decorator podem se beneficiar com frequência do uso do Prototype. Aplicando o padrão permite que você clone estruturas complexas ao invés de reconstruí-las do zero.
<li>O Prototype não é baseado em heranças, então ele não tem os inconvenientes dela. Por outro lado, o Prototype precisa de uma inicialização complicada do objeto clonado. O Factory Method é baseado em herança mas não precisa de uma etapa de inicialização.
<li>Algumas vezes o Prototype pode ser uma alternativa mais simples a um Memento. Isso funciona se o objeto, o estado no qual você quer armazenar na história, é razoavelmente intuitivo e não tem ligações para recursos externos, ou as ligações são fáceis de se restabelecer.
<li>As Fábricas Abstratas, Construtores, e Protótipos podem todos ser implementados como Singletons.
