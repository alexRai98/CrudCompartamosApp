import {StyleSheet, Text, View} from 'react-native';
import {FC} from 'react';

export interface ITopBar {
  title: string;
}

const TopBar: FC<ITopBar> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  greeting: {
    fontSize: 16,
    margin: 8,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
export default TopBar;
