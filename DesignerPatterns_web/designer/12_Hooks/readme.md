<h1> Padroes Hooks</h1>

<p>
Embora os Hooks não sejam necessariamente um padrão de design, os Hooks desempenham um papel muito importante no design do seu aplicativo. Muitos padrões de design tradicionais podem ser substituídos por Hook.
</p>

<li> UseState
 <p>
  O useStateHook permite que os desenvolvedores atualizem e manipulem o estado dentro dos componentes da função sem a necessidade de convertê-lo em um componente de classe. Uma vantagem deste Hook é que ele é simples e não requer tanta complexidade quanto outros React Hooks
 </p>
<li> useEffect

<p>
O useEffectHook é usado para executar código durante os principais eventos do ciclo de vida em um componente de função. O corpo principal de um componente de função não permite mutações, assinaturas, temporizadores, registro e outros efeitos colaterais. Se forem permitidos, isso pode levar a erros confusos e inconsistências na IU. O gancho useEffect evita todos esses "efeitos colaterais" e permite que a IU funcione sem problemas. É uma combinação de componentDidMount,, componentDidUpdatee componentWillUnmount, tudo em um só lugar.
</p>
<li> useContext
<p>
O useContextHook aceita um objeto de contexto, que é o valor retornado de React.createcontext, e retorna o valor de contexto atual para esse contexto. O useContext Hook também funciona com a API React Context para compartilhar dados em todo o aplicativo sem a necessidade de passar os acessórios do seu aplicativo por vários níveis.

Deve-se notar que o argumento passado para o useContextgancho deve ser o próprio objeto de contexto e qualquer componente que chame o useContextsempre será renderizado novamente sempre que o valor do contexto mudar.

</p>
<li> useReducer
<p>
O useReducerHook oferece uma alternativa setStatee é especialmente preferível quando você tem uma lógica de estado complexa que envolve vários subvalores ou quando o próximo estado depende do anterior. Ele assume uma reducerfunção e uma entrada de estado inicial e retorna o estado atual e uma dispatchfunção como saída por meio de desestruturação de array. useReducertambém otimiza o desempenho de componentes que acionam atualizações profundas.
</p>
