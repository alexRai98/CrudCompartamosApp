import React, {FC} from 'react';
import {Button, Card, Modal, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';

interface IModalDeleteClient {
  visible: boolean;
  onDelete: () => void;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalDeleteClient: FC<IModalDeleteClient> = ({
  visible,
  setVisible,
  onDelete,
}) => {
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => setVisible(false)}>
      <Card disabled={true}>
        <Text>Estás seguro de eliminar el cliente</Text>
        <View style={styles.containerButtons}>
          <Button
            onPress={() => setVisible(false)}
            status="info"
            appearance="outline">
            Cancelar
          </Button>
          <Button onPress={onDelete} status="danger">
            Eliminar
          </Button>
        </View>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-around',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
