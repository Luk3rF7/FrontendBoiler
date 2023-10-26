const DataContext = React.createContext()

function App() {
  // recebe dados globais
  const data = { ... }

  return (
    <div>
      // passa dados globais para data
      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  )
}