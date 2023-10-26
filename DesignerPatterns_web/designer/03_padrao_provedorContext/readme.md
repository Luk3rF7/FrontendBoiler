<h1>Provedor Padrão</h1>

<p>
Em alguns casos, queremos disponibilizar dados para muitos (se não todos) componentes de uma aplicação. Embora possamos passar dados para componentes usando props, isso pode ser difícil de fazer se quase todos os componentes do seu aplicativo precisarem de acesso ao valor dos adereços.

Muitas vezes acabamos com algo chamado perfuração de suporte , que é o caso quando passamos suportes bem abaixo na árvore de componentes. Refatorar o código que depende dos adereços torna-se quase impossível e é difícil saber de onde vêm certos dados

</p>

<h2> Provider e bom para manipular dados Globais</h2>
