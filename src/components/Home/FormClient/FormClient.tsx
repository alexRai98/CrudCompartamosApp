import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import {GenericInput} from '../../shared/GenericInput.tsx';
import {Datepicker} from '@ui-kitten/components';
import {RadioButtonGender} from './RadioButtonGender.tsx';
import { SelectCity } from "./SelectCity.tsx";

const now = new Date();
const minDate = new Date(
  now.getFullYear() - 100,
  now.getMonth(),
  now.getDate(),
);
export const FormClient: React.JSX.Element = () => {
  const [value, setValue] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [gender, setGender] = React.useState<string>('');
  const [date, setDate] = React.useState(new Date());
  return (
    <ScrollView style={styles.container}>
      <GenericInput
        label={'Ingrese su nombre'}
        value={value}
        setValue={setValue}
        placeHolder={'nombre del cliente'}
      />
      <GenericInput
        label={'Ingrese sus apellidos'}
        value={lastName}
        setValue={setLastName}
        placeHolder={'Apellido del cliente'}
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
      <SelectCity />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
});
