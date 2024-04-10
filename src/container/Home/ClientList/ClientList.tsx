import {IClient} from '../../../components/Home/ClientItem/infraestructure/IClient.ts';
import {Animated, StyleSheet} from 'react-native';
import FlatList = Animated.FlatList;
import {ClientItem} from '../../../components/Home/ClientItem/ClientItem.tsx';
import {FC, useEffect, useState} from 'react';
import {ServiceGetAllClients} from '../../../service/Clients/ServiceCrudClient.ts';

interface IClientList {}

export const ClientList: FC<IClientList> = () => {
  const [items, setItems] = useState<IClient[]>();

  const fetchItems = async () => {
    const items = await ServiceGetAllClients();
    setItems(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={({item}) => <ClientItem key={item.DNI} client={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
  },
});
