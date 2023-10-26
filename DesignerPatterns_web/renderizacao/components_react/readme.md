<h1> Ciclo de vida </h1>

<p>
Cada componente de reação passa por três estágios; montagem, renderização e desmontagem. A série de eventos que ocorrem durante esses três estágios pode ser chamada de ciclo de vida do componente. Embora esses eventos estejam parcialmente relacionados ao estado do componente (seus dados internos), o ciclo de vida é um pouco diferente. O React possui código interno que carrega e descarrega componentes conforme necessário, e um componente pode existir em vários estágios de uso dentro desse código interno.</p>

<li>
render()- Este método é o único método obrigatório dentro de um componente de classe no React e é o mais utilizado. Como o nome sugere, ele cuida da renderização do seu componente para a UI, e isso acontece durante a montagem e renderização do seu componente.

<li>componentDidMount()é executado depois que a saída do componente foi renderizada no DOM.
<li>componentWillUnmount()é invocado imediatamente antes de um componente ser desmontado e destruído
<li>
shouldComponentUpdate()é invocado antes da renderização quando novos adereços ou estados são recebidos.
<li>componentDidUpdate()é invocado imediatamente após a atualização ocorrer. Este método não é chamado para a renderização inicial.

<h2>Componente de ordem superior</h2>

<p>
Componentes de ordem superior (HOC) são uma técnica avançada no React para reutilizar a lógica dos componentes. O que significa que um componente de ordem superior é uma função que pega um componente e retorna um novo componente. São padrões que emergem da natureza composicional do React. Enquanto um componente transforma adereços em UI, um componente de ordem superior transforma um componente em outro componente, e eles tendem a ser populares em bibliotecas de terceiros.</p>
