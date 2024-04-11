import React, {useEffect} from 'react';
import {useApp} from '../../../../store/ClientContext.tsx';
import {ServiceGetAllClients} from '../../../../service/Clients/ServiceCrudClient.ts';
import { Alert } from "react-native";

interface IUseHomeInfo {
  visibleModalForm: boolean;
  setVisibleModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}
export const useHomeInfo = (): IUseHomeInfo => {
  const [visible, setVisible] = React.useState(false);
  const {isLoading, setIsLoading, setClientList} = useApp();

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const items = await ServiceGetAllClients();
      setClientList(items);
    } catch (e) {
      Alert.alert("Upps","Ocurrió un error inisperado, intente nuevemente")
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return {
    visibleModalForm: visible,
    isLoading,
    setVisibleModalForm: setVisible,
  };
};
