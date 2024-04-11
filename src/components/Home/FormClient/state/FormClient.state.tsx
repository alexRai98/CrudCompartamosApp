import React, {useEffect, useState} from 'react';
import {
  ServiceRegisterClient,
  ServiceUpdateClient,
} from '../../../../service/Clients/ServiceCrudClient.ts';
import {IClient} from '../../ClientItem/infraestructure/IClient.ts';
import {useApp} from '../../../../store/ClientContext.tsx';
import {cities, FieldNameEnum} from '../../../shared/constans/Constans.ts';
import {getRegexOnBlur} from '../../../shared/utils/GetRegex.ts';
import {IFormClient} from '../FormClient.tsx';
import {IndexPath} from '@ui-kitten/components';
import {Alert} from 'react-native';

interface IUseFormClient {
  dni: string;
  setDni: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  onSubmit: () => void;
  selectedIndex: IndexPath;
  setSelectedIndex: React.Dispatch<React.SetStateAction<IndexPath>>;
  title: string;
}

export const useFormClient = ({
  setVisibleModal,
}: IFormClient): IUseFormClient => {
  const [name, setName] = React.useState('');
  const [dni, setDni] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [gender, setGender] = React.useState<string>('M');
  const [date, setDate] = React.useState(new Date());
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0),
  );
  const [title, setTitle] = React.useState('Registrar Cliente');
  const [isUpdate, setIsUpdate] = React.useState(false);

  const {setIsLoading, setClientList, clientsList} = useApp();
  const {updateClient} = useApp();

  const onSubmit = async () => {
    const dateStr = date.toLocaleDateString('en-GB');

    const newClient: IClient = {
      name: name,
      last_name: lastName,
      gender: gender,
      birthdate: dateStr,
      city: cities[selectedIndex.row],
      dni: dni,
    };

    const isValidData = validateData(newClient);
    if (!isValidData) {
      return;
    }

    if (isUpdate) {
      await updateClientService(newClient);
    } else {
      await registerClient(newClient);
    }
  };
  const registerClient = async (newClient: IClient) => {
    try {
      setIsLoading(true);
      const response = await ServiceRegisterClient(newClient);
      if (response.ok) {
        if (!clientsList) {
          setClientList([newClient]);
        } else {
          setClientList([...clientsList, newClient]);
        }
        setVisibleModal(false);
      }
    } catch (e) {
      Alert.alert("Upps","Ocurrió un error al guardar los datos, intente nuevemente")
    } finally {
      setIsLoading(false);
    }
  };

  const updateClientService = async (newClient: IClient) => {
    try {
      setIsLoading(true);
      const clients = await ServiceUpdateClient(newClient);
      setClientList(clients);
      setVisibleModal(false);
    } catch (e) {
      Alert.alert("Upps","Ocurrió un error al guardar los datos, intente nuevemente")
    } finally {
      setIsLoading(false);
    }
  };

  const validateData = (client: IClient): boolean => {
    return (
      isValidData(FieldNameEnum.NAME, client.name) &&
      isValidData(FieldNameEnum.NAME, client.last_name) &&
      isValidData(FieldNameEnum.DOCUMENT, client.dni)
    );
  };

  const isValidData = (fieldName: FieldNameEnum, value: string): boolean => {
    const regex = getRegexOnBlur(fieldName);
    return regex.test(value);
  };

  useEffect(() => {
    if (updateClient !== undefined) {
      const [day, month, year] = updateClient.birthdate.split('/');
      var birthdate = new Date(`${year}-${month}-${day}`);

      setName(updateClient.name);
      setLastName(updateClient.last_name);
      setDni(updateClient.dni);
      setGender(updateClient.gender);
      setDate(birthdate);
      setSelectedIndex(findIndexCity(updateClient.city));
      setTitle('Actualizar Cliente');
      setIsUpdate(true);
    }
  }, [updateClient]);

  const findIndexCity = (cityFind: string): IndexPath => {
    const indexCity = cities.findIndex(city => city === cityFind);
    return new IndexPath(indexCity);
  };

  return {
    name,
    setName,
    lastName,
    setLastName,
    gender,
    setGender,
    date,
    setDate,
    onSubmit,
    dni,
    setDni,
    selectedIndex,
    setSelectedIndex,
    title,
  };
};
