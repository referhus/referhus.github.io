import { createContext, useContext, useState, useCallback } from 'react';

export function createVisitsContext(getFunction) {
  const Context = createContext(null);

  const Provider = ({ children, initialValue = 0 }) => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = useCallback(async (...args) => {
      setLoading(true);
      setError(null);

      try {
        const result = await getFunction(...args);
        setData(result);
        return result;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    }, []);

    return (
      <Context.Provider value={{
        data,
        loading,
        error,
        getData,
        setData
      }}>
        {children}
      </Context.Provider>
    );
  };

  const useVisitsContext = () => {
    const context = useContext(Context);
    if (!context) throw new Error('useApi must be used within Provider');
    return context;
  };

  return { Provider, useVisitsContext };
}