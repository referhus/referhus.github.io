import { createContext, useContext } from 'react';
import { useFilters } from './use-filters'

export const FiltersContext = createContext({
  list: [],
  handleSelect: () => {}
})

export const FiltersProvider = ({ children }) => {
  const { list, handleSelect } = useFilters()

  const value = {
    list,
    handleSelect
  }

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useCounter must be used within CounterProvider');
  }
  return context;
};