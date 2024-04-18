import {createContext, useContext} from 'react';
import {ColorsType} from 'types/colors.type';

interface AppContextProps {
  // Define your context properties and their types here if needed
  Colors: ColorsType;
}

const AppContext = createContext<AppContextProps>(undefined);
export default AppContext;

export const useAppContext = () => {
  return useContext(AppContext);
};
