import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import CategoryContainer from 'src/features/make-transfer/screens/category/ui';
import { PrivateStackParamList } from 'src/features/navigation';
import useMakeTransferForm from 'src/features/make-transfer/hooks/make-transfer-form';
import { IconType } from 'src/assets/icons/types';
import { useCategoriesStore } from 'src/hooks/useCategories';

type MakeTransferScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'MakeTransferStack'
>;

const mockCategories = [
  {
    id: '1',
    name: 'Alimentação',
    backgroundColor: '#FF6B35',
    color: '#FFFFFF',
    icon: IconType.food,
  },
  {
    id: '2',
    name: 'Transporte',
    backgroundColor: '#4A90E2',
    color: '#FFFFFF',
    icon: IconType.transport,
  },
  {
    id: '3',
    name: 'Casa',
    backgroundColor: '#8B4513',
    color: '#FFFFFF',
    icon: IconType.house,
  },
  {
    id: '4',
    name: 'Lazer',
    backgroundColor: '#9C27B0',
    color: '#FFFFFF',
    icon: IconType.games,
  },
  {
    id: '5',
    name: 'Saúde',
    backgroundColor: '#E91E63',
    color: '#FFFFFF',
    icon: IconType.health,
  },
  {
    id: '6',
    name: 'Outros',
    backgroundColor: '#607D8B',
    color: '#FFFFFF',
    icon: IconType.help,
  },
];

export type Status = 'loading' | 'default' | 'error';

interface Props {
  initialStatus?: Status;
}

const CategoryScreen = ({ initialStatus = 'loading' }: Props) => {
  const { watch, setValue } = useMakeTransferForm();
  const navigation = useNavigation<MakeTransferScreenNavigationProp>();
  const [status, setStatus] = useState<Status>(initialStatus);

  const { categories, createCategory } = useCategoriesStore();

  const initializeCategories = async () => {
    try {
      for (const category of mockCategories) {
        await createCategory(category);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setStatus('default');
    }
  };

  useEffect(() => {
    if (status === 'loading') {
      initializeCategories();
    }
  }, []);

  const handleOnConfirm = () => {
    navigation.navigate('MakeTransferStack', {
      screen: 'Title',
    });
  };

  return (
    <CategoryContainer
      onBack={navigation.goBack}
      onConfirm={handleOnConfirm}
      setCategory={value => setValue('categoryId', value)}
      selectedCategoryId={watch('categoryId')}
      categories={categories}
      status={status}
    />
  );
};

export default CategoryScreen;
