import {IClient} from '../../components/Home/ClientItem/infraestructure/IClient.ts';

const API = 'http://10.0.2.2:8080';
export const ServiceGetAllClients = async (): Promise<IClient[]> => {
  const response: Response = await fetch(`${API}/clients`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as Promise<IClient[]>;
};
