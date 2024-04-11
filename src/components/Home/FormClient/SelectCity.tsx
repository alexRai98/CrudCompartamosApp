import React, {FC} from 'react';
import {IndexPath, Select, SelectItem} from '@ui-kitten/components';
import {StyleSheet, Text, View} from 'react-native';
import {cities} from '../../shared/constans/Constans.ts';

interface ISelectCity {
  selectedIndex: IndexPath;
  setSelectedIndex: React.Dispatch<React.SetStateAction<IndexPath>>;
}

export const SelectCity: FC<ISelectCity> = ({
  setSelectedIndex,
  selectedIndex,
}) => {
  const displayValue = cities[selectedIndex.row];

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
        onSelect={(index: IndexPath) => {
          setSelectedIndex(index);
        }}>
        {cities.map(title => (
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
    marginBottom: 15,
  },
});
