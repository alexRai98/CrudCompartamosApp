import {IClient} from '../../components/Home/ClientItem/infraestructure/IClient.ts';

const API = 'http://10.0.2.2:8080';

interface IResponseAPI {
  ok: boolean;
}
export const ServiceGetAllClients = async (): Promise<IClient[]> => {
  const response: Response = await fetch(`${API}/clients`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as Promise<IClient[]>;
};

export const ServiceRegisterClient = async (
  client: IClient,
): Promise<IResponseAPI> => {
  const response: Response = await fetch(`${API}/client`, {
    method: 'POST',
    body: JSON.stringify(client),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as Promise<IResponseAPI>;
};

export const ServiceUpdateClient = async (
  client: IClient,
): Promise<IClient[]> => {
  return GenericServiceClient('PUT', client);
};

export const ServiceDeleteClient = async (
  client: IClient,
): Promise<IClient[]> => {
  return GenericServiceClient('DELETE', client);
};

const GenericServiceClient = async (
  method: string,
  body: IClient,
): Promise<IClient[]> => {
  const response: Response = await fetch(`${API}/client`, {
    method: method,
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as Promise<IClient[]>;
};
