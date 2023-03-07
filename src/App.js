import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <ThemeProvider>
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
