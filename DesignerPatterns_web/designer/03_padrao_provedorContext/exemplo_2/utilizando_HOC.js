function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  // recebe dados da theme
  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return (
    // recebe  dados globais
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}
// exemplo :
export default function App() {
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  );
}
// utilizando hooks conseguimos ter organização de provider
export default function TextBox() {
  const theme = useThemeContext();

  return <li style={theme.theme}>...</li>;
}