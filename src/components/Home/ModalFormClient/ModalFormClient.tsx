import React, {FC} from 'react';
import {Modal} from 'react-native';
import {FormClient} from '../FormClient/FormClient.tsx';

interface IModalFormClient {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalFormClient: FC<IModalFormClient> = ({
  visible,
  setVisible,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={() => setVisible(false)}>
      <FormClient setVisibleModal={setVisible} />
    </Modal>
  );
};
