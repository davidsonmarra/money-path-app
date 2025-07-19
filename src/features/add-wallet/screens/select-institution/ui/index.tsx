import { render } from '@testing-library/react-native';
import React from 'react';
import { SectionList, SectionListRenderItem, View } from 'react-native';
import { IconType } from 'src/assets/icons/types';
import renderIcon from 'src/assets/icons/utils';
import {
  Divider,
  Header,
  IconRound,
  ListItem,
  Text,
  TextType,
} from 'src/components';
import useStyles from 'src/features/add-wallet/screens/select-institution/ui/styles';
import {
  WalletProps,
  SelectWalletSection,
} from 'src/features/add-wallet/types';
import { useTheme } from 'src/hooks/useTheme';

interface Props {
  onBack: () => void;
  selectInstitution: (institution: WalletProps) => void;
}

const personalInstitutions: WalletProps[] = [
  {
    name: 'Carteira',
    icon: IconType.wallet,
    backgroundColor: '#2A5C99',
    color: '#EAC43D',
    type: 'personal',
  },
  {
    name: 'Banco',
    icon: IconType.bank,
    backgroundColor: '#2A5C99',
    color: '#EAC43D',
    type: 'personal',
  },
];

const banksInstitutions: WalletProps[] = [
  {
    name: 'Banco do Brasil',
    icon: IconType.bancoDoBrasil,
    backgroundColor: '#FFEF38',
    type: 'bank',
  },
  {
    name: 'Itaú',
    icon: IconType.itau,
    backgroundColor: '#FF6A00',
    type: 'bank',
  },
  {
    name: 'Nubank',
    icon: IconType.nubank,
    backgroundColor: '#820AD1',
    type: 'bank',
  },
  {
    name: 'Santander',
    icon: IconType.santander,
    backgroundColor: '#EA1D25',
    type: 'bank',
  },
  {
    name: 'Inter',
    icon: IconType.inter,
    backgroundColor: '#EA7100',
    type: 'bank',
  },
];

const data: SelectWalletSection[] = [
  {
    title: 'Personalizado',
    data: personalInstitutions,
  },
  {
    title: 'Bancos',
    data: banksInstitutions,
  },
];

const renderItem =
  (
    selectInstitution: (institution: WalletProps) => void,
    renderLeading: (
      icon: IconType,
      backgroundColor?: string,
    ) => React.ReactElement,
  ): SectionListRenderItem<WalletProps> =>
  ({ index, item }) =>
    (
      <ListItem
        content={{
          type: 'simple',
          label: item.name,
        }}
        leading={renderLeading(item.icon, item.backgroundColor)}
        navigationIndicator
        testID={`btn-list-item-${index}`}
        onPress={() => selectInstitution(item)}
      />
    );

const SelectInstitutionContainer = ({ onBack, selectInstitution }: Props) => {
  const { colors } = useTheme().theme;
  const styles = useStyles({});

  const renderLeading = (icon: IconType, backgroundColor?: string) => (
    <IconRound
      icon={icon}
      backgroundColor={backgroundColor}
      color={colors.primary}
      size={32}
    />
  );

  return (
    <>
      <Header onLeftIconPress={onBack} text="Selecione a Instituição" />
      <View style={styles.container}>
        <SectionList<WalletProps>
          sections={data}
          keyExtractor={item => item.name}
          renderItem={renderItem(selectInstitution, renderLeading)}
          renderSectionHeader={({ section: { title } }) => (
            <Text type={TextType.textMediumMedium}>{title}</Text>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ marginVertical: 12 }}>
              <Divider />
            </View>
          )}
          SectionSeparatorComponent={() => (
            <View style={{ marginBottom: 24 }} />
          )}
          stickySectionHeadersEnabled={false}
          contentContainerStyle={styles.sectionListContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default SelectInstitutionContainer;
