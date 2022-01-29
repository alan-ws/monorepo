import React, { FC } from 'react';
import { Image, Text, ScrollView, Button, Flex, Heading } from 'native-base';
import { Bookmark } from '../../components/icons';
import { BasketDrawer } from '../../components/drawers';
import { useNavigation } from '../../native/natigation';
import { useSelector } from 'react-redux';
import { RootState } from '@kaddra-app/state';


const Toast: FC<{msg: string; state: string}> = ({msg, state}) => {
  const toastColors: {[key:string]: string} = {
    success: 'green',
    error: 'red',
  };

  return (
    <Flex
      bgColor={toastColors[state]}
      flexDirection={'row'}
      w="full"
      justifyContent={'space-between'}
    >
      <Text>{msg}</Text>
      <Button>VIEW</Button>
    </Flex>
  );
};

export const Product = () => {
  const navigation = useNavigation();
  const productId = useSelector((state: RootState) => state.product.activeProduct?.id)
  const [isOpen, setIsOpen] = React.useState(false);
  const [toast, setToast] =
    React.useState<{ msg: string; state: 'success' | 'error' }>();

  return (
    <>
      <ScrollView
        _contentContainerStyle={{
          px: '20px',
          mb: '4',
          minW: '72',
        }}
      >
        <Button _web={{ display: 'none' }} onPress={() => navigation.goBack()}>
          Back
        </Button>
        <Flex flexDirection={'column'} width={'full'} alignItems={'center'}>
          <Image
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1QukMBWnoHBMfRoF7F3U-uEmde1YvW8fyRdFQdJKMMc_0-xw6mcK2PoMclsxsvZcSmMshTTTTAkoJQSo5YI25hszp4M0bumt2FqQNRtWmzdTY2NF95nTVjA&usqp=CAE"
            height="350px"
            width="2/3"
            alt="collect"
          />
          {toast ? <Toast {...toast} /> : null}
          <Flex flexDirection={'row'} width={'full'}>
            <Flex
              flexDirection={'row'}
              width={'1/2'}
              justifyContent={'flex-start'}
            >
              <Image
                src={
                  'https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-heart-thin.png'
                }
                width="8"
                height="8"
                alt="heart"
              />
              <Image
                src={
                  'https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-share-8.png'
                }
                width="8"
                height="8"
                alt="share"
              />
            </Flex>
            <Flex
              flexDirection={'row'}
              width={'1/2'}
              justifyContent={'flex-end'}
            >
              <Bookmark />
            </Flex>
          </Flex>
          <Flex flexDirection={'row'} width={'full'}>
            <Text>2 Likes / 4 Shares</Text>
          </Flex>
          <Flex flexDirection={'column'} width={'full'}>
            <Heading>Product name</Heading>
            <Text>S$789 Vevue</Text>
          </Flex>
          <Flex flexDirection={'column'} width={'full'}>
            <Text>About the Champagne</Text>
            <Text>
              The Champagne Veuve Clicquot is immediately Imposed on the nose
              while its complexity explodes in the mouth. The first notes of
              fruits are completed with other more The Champagne Veuve Clicquot
              is immediately Imposed on the nose while its complexity explodes
              in the mouth. The first notes of fruits are completed with more
              secret ones of sponge cake and vanilla after the maturation in
              bottle. The Brut Yellow Label has an optimal balance between
              finesse and power. Veuve Clicquot Brut Tasting Note Powerful
              texture, characterized by a strong acidity and a mineral murmur.
              Subtle flavors of white peach, anise, sponge cake and Quinones.
              The elegance of the end topples in a smoky note. To taste from now
              to 2022.
            </Text>
          </Flex>
          <Button onPress={() => setIsOpen((prev) => !prev)}>Purchase</Button>
        </Flex>
      </ScrollView>
      <BasketDrawer
        productid={productId}
        isopen={isOpen}
        setvisible={setIsOpen}
        settoast={setToast}
      />
    </>
  );
};
