import { createContext } from 'react';
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const NameContext = createContext(null); //Esto crea la cajita global, option 1 es usada para consumir el contexto, esto es una referencia

//Option es 2 es para agrupar las paginas o componentes que queremos que tengan acceso al contexto
export const NameProvider = ({ children }) => {
  const [name, setName] = useState('Anonymus');

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
