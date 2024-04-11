import {IClient} from '../../../../components/Home/ClientItem/infraestructure/IClient.ts';
import {useApp} from '../../../../store/ClientContext.tsx';

interface IUseClientList {
  clientsList: IClient[] | undefined;
}
export const useClientList = (): IUseClientList => {
  const {clientsList} = useApp();

  return {
    clientsList,
  };
};
