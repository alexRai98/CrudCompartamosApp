import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {GenericInput} from '../../shared/GenericInput.tsx';
import {Button, Datepicker} from '@ui-kitten/components';
import {RadioButtonGender} from './RadioButtonGender.tsx';
import {SelectCity} from './SelectCity.tsx';
import {useFormClient} from './state/FormClient.state.tsx';
import {FieldNameEnum} from '../../shared/constans/Constans.ts';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import {useApp} from '../../../store/ClientContext.tsx';

const now = new Date();
const minDate = new Date(
  now.getFullYear() - 100,
  now.getMonth(),
  now.getDate(),
);

export interface IFormClient {
  setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const FormClient: FC<IFormClient> = ({setVisibleModal}) => {
  const {
    name,
    setName,
    lastName,
    setLastName,
    gender,
    setGender,
    date,
    setDate,
    dni,
    setDni,
    onSubmit,
    setSelectedIndex,
    selectedIndex,
    title,
  } = useFormClient({setVisibleModal});
  const {setUpdateClient} = useApp();

  return (
    <View style={styles.containerView}>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setVisibleModal(false);
            setUpdateClient(undefined);
          }}
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            right: 0,
            top: 5,
            height: 30,
            backgroundColor: '#fff',
            borderRadius: 100,
          }}>
          <FontAwesomeIcon style={{color: '#000'}} size={15} icon={faXmark} />
        </TouchableOpacity>
        <Text
          style={{
            marginBottom: 15,
            color: '#000000',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '500',
          }}>
          {title}
        </Text>
        <GenericInput
          label={'Ingrese Nombre'}
          value={name}
          setValue={setName}
          placeHolder={'Nombres'}
          fieldName={FieldNameEnum.NAME}
        />
        <GenericInput
          label={'Ingrese Apellidos'}
          value={lastName}
          setValue={setLastName}
          placeHolder={'Apellidos'}
          fieldName={FieldNameEnum.NAME}
        />
        <GenericInput
          label={'Ingrese DNI'}
          value={dni}
          setValue={setDni}
          placeHolder={'DNI'}
          fieldName={FieldNameEnum.DOCUMENT}
        />
        <RadioButtonGender gender={gender} setGender={setGender} />
        <Text style={{marginBottom: 5, color: '#000000'}}>
          Seleccione su fecha de nacimiento
        </Text>
        <Datepicker
          placeholder="Fecha de nacimiento"
          max={now}
          min={minDate}
          date={date}
          style={{marginBottom: 15}}
          onSelect={nextDate => setDate(nextDate)}
        />
        <SelectCity
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Button
          style={{marginBottom: 25}}
          appearance="outline"
          status="info"
          onPress={onSubmit}>
          Guadar
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
    backgroundColor: '#ffffff',
    marginVertical: 20,
    borderRadius: 10,
    height: '50%',
    width: '80%',
  },
  containerView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
