import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Header, Text, TextType, Button, ButtonType} from 'src/components';
import {InstitutionProps} from 'src/features/add-wallet/types';
import useStyles from 'src/features/add-wallet/screens/select-color/ui/styles';
import renderIcon from 'src/assets/icons/utils';
import {useTheme} from 'src/hooks/useTheme';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface Props {
  institution: InstitutionProps;
  onBack: () => void;
  selectColor: (institution: InstitutionProps) => void;
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
  institution,
  onBack,
  selectColor,
  onConfirm,
}: Props) => {
  const {colors} = useTheme().theme;
  const styles = useStyles({
    backgroundColor: institution.backgroundColor ?? colors.secondary,
  });

  return (
    <>
      <Header text="Personalize a Cor" onLeftIconPress={onBack} />
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <View>
          <View style={styles.icon}>
            {renderIcon(institution.icon)({
              size: 100,
              color: institution.color ?? colors.primary,
            })}
          </View>
          <Text type={TextType.textMediumMedium}>
            Escolha uma cor para o ícone:
          </Text>
          <View style={styles.colorWrapper}>
            {colorsForIcon.map(color => (
              <TouchableOpacity
                key={`icon-color-${color}`}
                onPress={() => {
                  color !== institution.color &&
                    selectColor({...institution, color: color});
                }}
                testID={`btn-color-${color}`}>
                <View
                  style={[
                    styles.color,
                    {backgroundColor: color},
                    color === institution.color && styles.selectedColor,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text type={TextType.textMediumMedium}>
            Escolha uma cor para o fundo:
          </Text>
          <View style={styles.colorWrapper}>
            {colorsForIcon.map(color => (
              <TouchableOpacity
                key={`btn-backgroundColor-${color}`}
                onPress={() => {
                  color !== institution.backgroundColor &&
                    selectColor({...institution, backgroundColor: color});
                }}>
                <View
                  style={[
                    styles.color,
                    {backgroundColor: color},
                    color === institution.backgroundColor &&
                      styles.selectedColor,
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
