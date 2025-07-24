import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import BottomSheet from '../index';
import Text, { TextType } from 'src/components/text';
import Button, { ButtonType } from 'src/components/button';
import { StorybookView } from 'src/components';

const BottomSheetStory = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        type={ButtonType.primary}
        text="Abrir Bottom Sheet"
        onPress={handleOpen}
      />

      <BottomSheet
        isVisible={isVisible}
        onClose={handleClose}
        title="Exemplo de Bottom Sheet"
        maxHeight="70%"
      >
        <View style={{ padding: 16 }}>
          <Text type={TextType.textMediumRegular}>
            Este é um exemplo de conteúdo do Bottom Sheet. Você pode colocar
            qualquer JSX aqui.
          </Text>

          <View style={{ marginTop: 16 }}>
            <Text type={TextType.textMediumSemiBold}>Lista de itens:</Text>
            {[1, 2, 3, 4, 5].map(item => (
              <TouchableOpacity
                key={item}
                style={{
                  padding: 12,
                  backgroundColor: '#f0f0f0',
                  marginVertical: 4,
                  borderRadius: 8,
                }}
              >
                <Text type={TextType.textMediumRegular}>Item {item}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ marginTop: 16 }}>
            <Button
              type={ButtonType.secondary}
              text="Fechar"
              onPress={handleClose}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const BottomSheetMeta: Meta<typeof BottomSheetStory> = {
  title: 'Components/BottomSheet',
  component: BottomSheetStory,
  decorators: [
    Story => (
      <StorybookView>
        <Story />
      </StorybookView>
    ),
  ],
};

export default BottomSheetMeta;

export const Default: StoryObj<typeof BottomSheetStory> = {};
