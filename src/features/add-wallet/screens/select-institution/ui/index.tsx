import React from 'react';
import {SectionList, SectionListRenderItem, View} from 'react-native';
import {IconType} from 'src/assets/icons/types';
import {Divider, Header, ListItem, Text, TextType} from 'src/components';
import useStyles from 'src/features/add-wallet/screens/select-institution/ui/styles';
import {
  InstitutionProps,
  SelectInstitutionSection,
} from 'src/features/add-wallet/types';

interface Props {
  onBack: () => void;
  selectInstitution: (institution: InstitutionProps) => void;
}

const personalInstitutions: InstitutionProps[] = [
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

const banksInstitutions: InstitutionProps[] = [
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

const data: SelectInstitutionSection[] = [
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
    selectInstitution: (institution: InstitutionProps) => void,
  ): SectionListRenderItem<InstitutionProps> =>
  ({index, item}) =>
    (
      <ListItem
        text={item.name}
        icon={item.icon}
        backgroundColor={item.backgroundColor}
        testID={`btn-list-item-${index}`}
        onPress={() => selectInstitution(item)}
      />
    );

const SelectInstitutionContainer = ({onBack, selectInstitution}: Props) => {
  const styles = useStyles();
  return (
    <>
      <Header onLeftIconPress={onBack} text="Selecione a Instituição" />
      <View style={styles.container}>
        <SectionList<InstitutionProps>
          sections={data}
          keyExtractor={item => item.name}
          renderItem={renderItem(selectInstitution)}
          renderSectionHeader={({section: {title}}) => (
            <Text type={TextType.textBold}>{title}</Text>
          )}
          ItemSeparatorComponent={() => <Divider />}
          SectionSeparatorComponent={() => <View style={{marginBottom: 16}} />}
          stickySectionHeadersEnabled={false}
          contentContainerStyle={styles.sectionListContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default SelectInstitutionContainer;
