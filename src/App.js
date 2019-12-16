import React from 'react'
import Navbar from './components/Navbar';
import { ThemeProvider } from './common/materialUI';
import theme from './common/pallete';

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
        <Navbar />
      <h1>Hello world</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;