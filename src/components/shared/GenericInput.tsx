import React, {FC} from 'react';
import {Input} from '@ui-kitten/components';
import {Text, View} from 'react-native';

interface IGenericInput {
  label: string;
  value: string;
  placeHolder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export const GenericInput: FC<IGenericInput> = ({
  label,
  value,
  setValue,
  placeHolder,
}) => {
  return (
    <View>
      <Text style={{marginBottom: 5, color:"#000000"}}>{label}</Text>
      <Input
        placeholder={placeHolder}
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
        style={{marginBottom: 15}}
      />
    </View>
  );
};
