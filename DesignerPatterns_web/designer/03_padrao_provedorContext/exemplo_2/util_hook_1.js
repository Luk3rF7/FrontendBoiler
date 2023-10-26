function useThemeContext() {
  // passo pro hook useContent
  //meu context para instanciar 
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return theme;
}