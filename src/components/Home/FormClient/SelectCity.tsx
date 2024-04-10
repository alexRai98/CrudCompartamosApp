import React, {FC, useState} from 'react';
import {IndexPath, Select, SelectItem} from '@ui-kitten/components';
import { StyleSheet, Text, View } from "react-native";

const data: string[] = [
  'Amazonas',
  'Áncash',
  'Apurímac',
  'Apurímac',
  'Arequipa',
  'Ayacucho',
  'Cajamarca',
  'Callao',
  'Cusco',
  'Huancavelica',
  'Huánuco',
  'Ica',
  'Junín',
  'La Libertad',
  'Lambayeque',
  'Lima',
  'Loreto',
  'Madre de Dios',
  'Moquegua',
  'Pasco',
  'Piura',
  'Puno',
  'San Martín',
  'Tacna',
  'Tumbes',
  'Ucayali',
];

interface ISelectCity {}

export const SelectCity: FC<ISelectCity> = () => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0),
  );

  const displayValue = data[selectedIndex.row];

  return (
    <View>
      <Text style={{marginBottom: 5, color: '#000000'}}>
        Seleccione su ciudad
      </Text>
      <Select
        style={styles.select}
        placeholder="Default"
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={(index: IndexPath) => setSelectedIndex(index)}>
        {data.map(title => (
          <SelectItem title={title} key={title} />
        ))}
      </Select>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 192,
  },
  select: {
    flex: 1,
    margin: 2,
  },
});
