import React, {FC, useState} from 'react';
import {Input} from '@ui-kitten/components';
import {Text, View} from 'react-native';
import {FieldNameEnum} from './constans/Constans.ts';
import { getRegex, getRegexOnBlur } from './utils/GetRegex.ts';

interface IGenericInput {
  label: string;
  value: string;
  placeHolder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  fieldName: FieldNameEnum;
}
export const GenericInput: FC<IGenericInput> = ({
  label,
  value,
  setValue,
  placeHolder,
  fieldName,
}) => {
  const [isValidInput, setIsValidInput] = useState(true);

  const handlerOnChange = (newValue: string) => {
    const regex = getRegex(fieldName);
    const isValid = regex.test(newValue);
    if (isValid) {
      setValue(newValue);
    }
  };

  const validateOnBlur = () => {
    const regex = getRegexOnBlur(fieldName);
    const isValid = regex.test(value);
    setIsValidInput(isValid);
  };

  return (
    <View>
      <Text style={{marginBottom: 5, color: '#000000'}}>{label}</Text>
      <Input
        placeholder={placeHolder}
        value={value}
        onChangeText={v => handlerOnChange(v)}
        onBlur={() => validateOnBlur()}
        style={[{marginBottom: 15}, !isValidInput && {borderColor: 'red'}]}
      />
    </View>
  );
};
