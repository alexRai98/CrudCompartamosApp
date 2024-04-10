import {IClient} from './infraestructure/IClient.ts';
import {FC, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
interface IClientItem {
  client: IClient;
}

export const ClientItem: FC<IClientItem> = ({client}) => {
  const [isDeleteActive, setIsDeleteActive] = useState(false);

  return (
    <TouchableOpacity
      onLongPress={() => setIsDeleteActive(true)}
      style={{position: 'relative', paddingVertical: 10}}>
      <View style={styles.containerItem}>
        <Text
          style={
            styles.textPrincipal
          }>{`${client.name} ${client.last_name}`}</Text>
        <Text
          style={{marginVertical: 5}}>{`Fec. Naci. ${client.birthdate}`}</Text>
        <View style={styles.containerData}>
          <Text style={styles.textFlag}>
            {client.gender === 'F' ? 'Femenino' : 'Masculino'}
          </Text>
          <Text style={styles.textFlag}>{client.city}</Text>
        </View>
        <View />
      </View>
      {isDeleteActive && (
        <Pressable
          style={styles.buttonDelete}
          onPress={() => {
            setIsDeleteActive(false);
          }}>
          <FontAwesomeIcon style={styles.icon} size={14} icon={faTrash} />
        </Pressable>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 20,
  },

  containerData: {
    flexDirection: 'row',
  },
  buttonDelete: {
    backgroundColor: '#d51515',
    position: 'absolute',
    borderRadius: 50,
    right: 0,
    width: 25,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
  },

  icon: {
    color: '#ffffff',
    alignSelf: 'center',
  },

  textFlag: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 50,
    backgroundColor: '#005f73',
    color: '#ffffff',
    marginEnd: 10,
    fontSize: 12,
  },
  textPrincipal: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
});
