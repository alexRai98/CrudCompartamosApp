import {TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

interface IAddButton {
  onClick: () => void;
}
export const AddButton: FC<IAddButton> = ({onClick}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'absolute',
        bottom: 40,
        right: 10,
        height: 60,
        backgroundColor: '#e02130',
        borderRadius: 100,
      }}>
      <FontAwesomeIcon style={{color: '#fff'}} size={30} icon={faPlus} />
    </TouchableOpacity>
  );
};
