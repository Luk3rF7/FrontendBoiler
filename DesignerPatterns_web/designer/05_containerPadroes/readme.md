<h1>Container Padrão</h1>

<p>
No React, uma maneira de impor a separação de interesses é usando o padrão Container/Presentational . Com esse padrão, podemos separar a visualização da lógica da aplicação.
</p>

<li>Componentes de apresentação : componentes que se preocupam com a forma como os dados são mostrados ao usuário. Neste exemplo, isso é renderizar a lista de imagens de cachorro .
<li>Componentes do contêiner : componentes que se preocupam com quais dados são mostrados ao usuário. Neste exemplo, isso está buscando as imagens do cachorro .

<h2> Container Apresentação</h2>
<p>
Um componente de apresentação recebe seus dados por meio do props. Sua função principal é simplesmente exibir os dados que recebe da maneira que desejamos, incluindo estilos, sem modificar esses dados.</p>
<h2> Componente do container </h2>
<p>
A principal função dos componentes do contêiner é passar dados para os componentes de apresentação, que eles contêm . Os próprios componentes do contêiner geralmente não renderizam nenhum outro componente além dos componentes de apresentação que se preocupam com seus dados. Como eles próprios não renderizam nada, geralmente também não contêm nenhum estilo.
</p>
<h2>Container Hook</h2>
<p>
Em muitos casos, o padrão Container/Presentational pode ser substituído por React Hooks. A introdução dos Hooks tornou mais fácil para os desenvolvedores adicionarem estado sem a necessidade de um componente de contêiner para fornecer esse estado.
</p>
