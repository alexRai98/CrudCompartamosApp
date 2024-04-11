import {Animated, StyleSheet} from 'react-native';
import FlatList = Animated.FlatList;
import {ClientItem} from '../../../components/Home/ClientItem/ClientItem.tsx';
import React, {FC} from 'react';
import {useClientList} from './state/ClientList.state.tsx';

interface IClientList {
  setVisibleFormModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClientList: FC<IClientList> = ({setVisibleFormModal}) => {
  const {clientsList} = useClientList();

  return (
    <FlatList
      style={styles.container}
      data={clientsList}
      renderItem={({item}) => <ClientItem key={item.dni} client={item} setVisibleFormModal={setVisibleFormModal} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
  },
});
