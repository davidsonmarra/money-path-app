import React from 'react';
import {
  DefaultSectionT,
  SectionList,
  SectionListRenderItem,
  View,
} from 'react-native';
import {IconType} from 'src/assets/icons/types';
import {Header, ListItem, Text, TextType} from 'src/components';
import useStyles from 'src/features/add-wallet/screens/select-institution/ui/styles';

interface Props {
  onBack: () => void;
}

interface InstitutionProps {
  name: string;
  icon: IconType;
  backgroundColor?: string;
}

type Section = {
  title: string;
  data: InstitutionProps[];
};

const personalInstitutions: InstitutionProps[] = [
  {name: 'Carteira', icon: IconType.wallet},
  {name: 'Banco', icon: IconType.bank},
];

const banksInstitutions: InstitutionProps[] = [
  {
    name: 'Banco do Brasil',
    icon: IconType.bancoDoBrasil,
    backgroundColor: '#FFEF38',
  },
  {name: 'Itaú', icon: IconType.itau, backgroundColor: '#FF6A00'},
  {name: 'Nubank', icon: IconType.nubank, backgroundColor: '#820AD1'},
  {name: 'Santander', icon: IconType.santander, backgroundColor: '#EA1D25'},
  {name: 'Inter', icon: IconType.inter, backgroundColor: '#EA7100'},
];

const data: Section[] = [
  {
    title: 'Personalizado',
    data: personalInstitutions,
  },
  {
    title: 'Bancos',
    data: banksInstitutions,
  },
];

const renderItem:
  | SectionListRenderItem<InstitutionProps, DefaultSectionT>
  | undefined = ({index, item: {name, icon, backgroundColor}}) => (
  <ListItem
    text={name}
    icon={icon}
    backgroundColor={backgroundColor}
    testID={`btn-list-item-${index}`}
  />
);

const SelectInstitutionContainer = ({onBack}: Props) => {
  const styles = useStyles();
  return (
    <>
      <Header onLeftIconPress={onBack} text="Selecione a Instituição" />
      <View style={styles.container}>
        <SectionList<InstitutionProps>
          sections={data}
          keyExtractor={item => item.name}
          renderItem={renderItem}
          renderSectionHeader={({section: {title}}) => (
            <Text type={TextType.textBold}>{title}</Text>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: '#8c8c8c',
              }}
            />
          )}
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
