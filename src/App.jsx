//Paso 1: Importar el provider del contexto o los contextos
//Paso 2: Agrupar las pages o components con el provider

import Footer from './components/Footer';
import GrandChild from './components/GrandChild';
import Header from './components/Header';

import { NameProvider } from './contexts/NameContext';


function App() {
  return (
    <NameProvider>
      <Header />
      <GrandChild />
      <Footer />
    </NameProvider>
  );
}

export default App;
