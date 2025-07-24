import React, { useState } from 'react';
import { View } from 'react-native';
import InputAmount from 'src/components/input-amount';
import StorybookView from 'src/components/storybook-view';

const InputAmountStory = () => {
  const [value, setValue] = useState('');

  const handleChangeText = (text: string) => {
    setValue(text);
    console.log('Value changed:', text);
  };

  return (
    <StorybookView>
      <View style={{ padding: 16, gap: 16 }}>
        <InputAmount
          value={value}
          onChangeText={handleChangeText}
          placeholder="0,00"
        />

        <InputAmount
          value="1000"
          onChangeText={handleChangeText}
          placeholder="0,00"
        />

        <InputAmount
          value="50000"
          onChangeText={handleChangeText}
          placeholder="0,00"
        />

        <InputAmount
          value=""
          onChangeText={handleChangeText}
          placeholder="Digite o valor"
        />
      </View>
    </StorybookView>
  );
};

export default {
  title: 'Components/InputAmount',
  component: InputAmountStory,
};

export const Default = () => <InputAmountStory />;
