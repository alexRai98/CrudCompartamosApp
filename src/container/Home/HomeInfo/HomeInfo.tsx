import {ModalFormClient} from '../../../components/Home/ModalFormClient/ModalFormClient.tsx';
import {ClientList} from '../ClientList/ClientList.tsx';
import {AddButton} from '../../../components/Home/AddButton/AddButton.tsx';
import React from 'react';
import {useHomeInfo} from './state/HomeInfo.state.tsx';
import {CustomLoader} from '../../../components/shared/Loader.tsx';
import { ModalDeleteClient } from "../../../components/Home/ModalDeleteClient/ModalDeleteClient.tsx";

// @ts-ignore
export const HomeInfo: React.JSX.Element = () => {
  const {visibleModalForm, setVisibleModalForm, isLoading} = useHomeInfo();

  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <>
          <ModalFormClient visible={visibleModalForm} setVisible={setVisibleModalForm} />
          <ClientList setVisibleFormModal={setVisibleModalForm} />
          <AddButton onClick={() => setVisibleModalForm(true)} />
        </>
      )}
    </>
  );
};
