<h1> Render Prop Padrao </h1>

<p>
Outra maneira de tornar os componentes muito reutilizáveis ​​é usar o padrão render prop . Uma prop render é uma prop em um componente, cujo valor é uma função que retorna um elemento JSX. O componente em si não renderiza nada além da propriedade render. Em vez disso, o componente simplesmente chama a propriedade render, em vez de implementar sua própria lógica de renderização.
</p>
<p>
Imagine que temos um Titlecomponente. Neste caso, o Titlecomponente não deve fazer nada além de renderizar o valor que passamos. Podemos usar um suporte de renderização para isso! Vamos passar o valor que queremos que o Titlecomponente renderize para a renderpropriedade.
</p>
