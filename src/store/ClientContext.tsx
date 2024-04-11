import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {IClient} from '../components/Home/ClientItem/infraestructure/IClient.ts';

type AppContextType = {
  clientsList: IClient[] | undefined;
  setClientList: Dispatch<SetStateAction<IClient[] | undefined>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  updateClient: IClient | undefined
  setUpdateClient: Dispatch<SetStateAction<IClient | undefined>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

const AppProvider = (props: {children: ReactNode}): ReactElement => {
  const [clientsList, setClientList] = useState<IClient[] | undefined>();
  const [updateClient, setUpdateClient] = useState<IClient | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <AppContext.Provider
      {...props}
      value={{
        clientsList,
        setClientList,
        isLoading,
        setIsLoading,
        updateClient,
        setUpdateClient
      }}
    />
  );
};

export {AppProvider, useApp};
