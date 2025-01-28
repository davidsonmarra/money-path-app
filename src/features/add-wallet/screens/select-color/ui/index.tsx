import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Header, Text, TextType, Button, ButtonType} from 'src/components';
import useStyles from 'src/features/add-wallet/screens/select-color/ui/styles';
import renderIcon from 'src/assets/icons/utils';
import {useTheme} from 'src/hooks/useTheme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconType} from 'src/assets/icons/types';

export interface Props {
  backgroundColor?: string;
  icon: IconType;
  color?: string;
  onBack: () => void;
  setColor: (color: string) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  onConfirm: () => void;
}

const colorsForIcon = [
  '#FF0000',
  '#FFA500',
  '#EAC43D',
  '#2A5C99',
  '#008000',
  '#4B0082',
  '#EE82EE',
];

const SelectColorContainer = ({
  backgroundColor,
  icon,
  color,
  onBack,
  setColor,
  setBackgroundColor,
  onConfirm,
}: Props) => {
  const {colors} = useTheme().theme;
  const styles = useStyles({
    backgroundColor: backgroundColor ?? colors.secondary,
  });

  return (
    <>
      <Header text="Personalize a Cor" onLeftIconPress={onBack} />
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <View>
          <View style={styles.icon}>
            {renderIcon(icon)({
              size: 100,
              color: color ?? colors.primary,
            })}
          </View>
          <Text type={TextType.textMediumMedium}>
            Escolha uma cor para o ícone:
          </Text>
          <View style={styles.colorWrapper}>
            {colorsForIcon.map(colorItem => (
              <TouchableOpacity
                key={`icon-color-${colorItem}`}
                onPress={() => {
                  color !== colorItem && setColor(colorItem);
                }}
                testID={`btn-color-${colorItem}`}>
                <View
                  style={[
                    styles.color,
                    {backgroundColor: colorItem},
                    colorItem === color && styles.selectedColor,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text type={TextType.textMediumMedium}>
            Escolha uma cor para o fundo:
          </Text>
          <View style={styles.colorWrapper}>
            {colorsForIcon.map(colorItem => (
              <TouchableOpacity
                key={`btn-backgroundColor-${colorItem}`}
                onPress={() => {
                  colorItem !== backgroundColor &&
                    setBackgroundColor(colorItem);
                }}>
                <View
                  style={[
                    styles.color,
                    {backgroundColor: colorItem},
                    colorItem === backgroundColor && styles.selectedColor,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Button
          type={ButtonType.primary}
          text="Continuar"
          onPress={onConfirm}
        />
      </SafeAreaView>
    </>
  );
};

export default SelectColorContainer;
