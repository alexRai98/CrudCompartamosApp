import {StyleSheet, Text, View} from 'react-native';
import {Layout, Radio} from '@ui-kitten/components';
import React, {FC} from 'react';

interface IRadioButtonGender {
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}
export const RadioButtonGender: FC<IRadioButtonGender> = ({
  setGender,
  gender,
}) => {
  return (
    <View>
      <Text style={{marginBottom: 5, color: '#000000'}}>Genero</Text>
      <Layout style={styles.container}>
        <Radio
          checked={gender == 'M'}
          onChange={checked => (checked ? setGender('M') : setGender(''))}>
          Masculino
        </Radio>
        <Radio
          checked={gender == 'F'}
          onChange={checked => (checked ? setGender('F') : setGender(''))}>
          Femenino
        </Radio>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
});
