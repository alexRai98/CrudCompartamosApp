import {IClient} from '../infraestructure/IClient.ts';
import {ServiceDeleteClient} from '../../../../service/Clients/ServiceCrudClient.ts';
import {useApp} from '../../../../store/ClientContext.tsx';
import {Alert} from 'react-native';

interface IUseClientItem {
  onDelete: (client: IClient) => void;
}
export const useClientItem = (): IUseClientItem => {
  const {setIsLoading, setClientList} = useApp();

  const onDelete = async (client: IClient) => {
    try {
      if (!validateDeleteClient(client)) {
        Alert.alert(
          'Acción inválida',
          'El cliente no se puede eliminar si es menor a 80 años',
        );
        return;
      }

      setIsLoading(true);
      const response = await ServiceDeleteClient(client);
      setClientList(response);
    } catch (e) {
      Alert.alert('Upps', 'Ocurrió un error inesperado');
    } finally {
      setIsLoading(false);
    }
  };

  const validateDeleteClient = (client: IClient): boolean => {
    const birthArr = client.birthdate.split('/');
    const now = new Date();
    const birthYear = birthArr.pop();
    // return now.getFullYear() - Number(birthYear) > 80;
    return true
  };

  return {
    onDelete,
  };
};
