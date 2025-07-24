import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ChevronDownIcon } from 'src/assets/icons';
import Text, { TextType } from 'src/components/text';
import BottomSheet from 'src/components/bottom-sheet';
import useStyles from 'src/components/selection-dropdown/styles';
import { useTheme } from 'src/hooks/useTheme';

export interface SelectionDropdownItem {
  id: string;
  label: string;
  value: any;
}

export interface Props {
  items: SelectionDropdownItem[];
  selectedItem?: SelectionDropdownItem;
  onSelectedItem: (item: SelectionDropdownItem) => void;
  placeholder?: string;
  disabled?: boolean;
  testID?: string;
}

const SelectionDropdown = ({
  items,
  selectedItem,
  onSelectedItem,
  placeholder = 'Selecione uma opção',
  disabled = false,
  testID,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useTheme().theme;
  const styles = useStyles({ disabled });

  const handlePress = useCallback(() => {
    if (!disabled) {
      setIsOpen(true);
    }
  }, [disabled]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSelectItem = useCallback(
    (item: SelectionDropdownItem) => {
      onSelectedItem(item);
      handleClose();
    },
    [onSelectedItem, handleClose],
  );

  const displayText = selectedItem ? selectedItem.label : placeholder;

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={handlePress}
        disabled={disabled}
        activeOpacity={0.7}
        testID={testID}
      >
        <Text
          type={TextType.textMediumRegular}
          style={[styles.text, !selectedItem && styles.placeholderText]}
        >
          {displayText}
        </Text>
        <ChevronDownIcon
          size={20}
          color={disabled ? colors.disabled : colors.text}
        />
      </TouchableOpacity>

      <BottomSheet
        isVisible={isOpen}
        onClose={handleClose}
        title="Selecione uma opção"
        maxHeight="75%"
      >
        <View style={styles.itemsContainer}>
          {items.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.item,
                selectedItem?.id === item.id && styles.selectedItem,
              ]}
              onPress={() => handleSelectItem(item)}
              testID={`dropdown-item-${item.id}`}
            >
              <Text
                type={TextType.textMediumRegular}
                style={[
                  styles.itemText,
                  selectedItem?.id === item.id && styles.selectedItemText,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheet>
    </>
  );
};

export default SelectionDropdown;
