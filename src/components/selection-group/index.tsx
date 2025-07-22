import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text, { TextType } from 'src/components/text';
import { RadioCheckedIcon, RadioUncheckedIcon } from 'src/assets/icons';
import useStyles from 'src/components/selection-group/styles';
import { useTheme } from 'src/hooks/useTheme';

export interface SelectionGroupItem {
  id: string;
  label: string;
  value: any;
}

export interface Props {
  items: SelectionGroupItem[];
  selectedItemIndex: number;
  onSelectedItem: (index: number, item: SelectionGroupItem) => void;
  style?: any;
}

const SelectionGroup = ({
  items,
  selectedItemIndex,
  onSelectedItem,
  style,
}: Props) => {
  const { colors } = useTheme().theme;
  const styles = useStyles();

  const handleItemPress = (index: number, item: SelectionGroupItem) => {
    onSelectedItem(index, item);
  };

  return (
    <View style={[styles.container, style]}>
      {items.map((item, index) => {
        const isSelected = index === selectedItemIndex;

        return (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.item,
              isSelected ? styles.selectedItem : styles.unselectedItem,
            ]}
            onPress={() => handleItemPress(index, item)}
            activeOpacity={0.7}
          >
            <View style={styles.itemContent}>
              {isSelected ? (
                <RadioCheckedIcon size={20} color={colors.success} />
              ) : (
                <RadioUncheckedIcon size={20} color={colors.divider} />
              )}
              <Text type={TextType.textMediumRegular} style={styles.itemText}>
                {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SelectionGroup;
