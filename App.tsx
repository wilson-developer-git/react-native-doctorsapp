

import { Home } from './src/screens/Home';

import { ThemeProvider } from 'styled-components/native';
import light from './src/screens/theme/light';
import dark from './src/screens/theme/dark';

export default function App() {
  return (
    <ThemeProvider theme={ dark }>
        <Home />
    </ThemeProvider>
    
  );
}

