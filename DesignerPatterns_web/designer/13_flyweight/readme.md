<li>Divida os campos de uma classe que irá se tornar um flyweight em duas partes:
<p>
o estado intrínseco: os campos que contém dados imutáveis e duplicados para muitos objetos
</p>
<p>
o estado extrínseco: os campos que contém dados contextuais únicos para cada objeto</p>

<li>Deixe os campos que representam o estado intrínseco dentro da classe, mas certifique-se que eles sejam imutáveis. Eles só podem obter seus valores iniciais dentro do construtor.
<li>Examine os métodos que usam os campos do estado extrínseco. Para cada campo usado no método, introduza um novo parâmetro e use-o ao invés do campo.
<li>Opcionalmente, crie uma classe fábrica para gerenciar o conjunto de flyweights. Ela deve checar por um flyweight existente antes de criar um novo. Uma vez que a fábrica está rodando, os clientes devem pedir flyweights apenas através dela. Eles devem descrever o flyweight desejado ao passar o estado intrínseco para a fábrica.
<li>O cliente deve armazenar ou calcular valores para o estado extrínseco (contexto) para ser capaz de chamar métodos de objetos flyweight. Por conveniência, o estado extrínseco junto com o campo de referência flyweight podem ser movidos para uma classe de contexto separada.

<h2>Realaçoes com outro padroes </h2>

<li>Você pode implementar nós folha compartilhados da árvore Composite como Flyweights para salvar RAM.
<li>O Flyweight mostra como fazer vários pequenos objetos, enquanto o Facade mostra como fazer um único objeto que represente um subsistema inteiro.
<li>O Flyweight seria parecido com o Singleton se você, de algum modo, reduzisse todos os estados de objetos compartilhados para apenas um objeto flyweight. Mas há duas mudanças fundamentais entre esses padrões:
<p>Deve haver apenas uma única instância singleton, enquanto que uma classe flyweight pode ter múltiplas instâncias com diferentes estados intrínsecos.</p>
<p>O objeto singleton pode ser mutável. Objetos flyweight são imutáveis.</p>
