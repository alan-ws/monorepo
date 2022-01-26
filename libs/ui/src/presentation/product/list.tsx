import React from 'react';
import {
  Button,
  Pressable,
  Text,
  Image,
  Divider,
  Flex,
  Heading,
  VStack,
} from 'native-base';
import { RegionalDrop } from '../../components/dropdowns';
import { Bookmark, Basket } from '../../components/icons';
import { Filter } from '../../components/navbars';
import { useNavigation } from '../../native/natigation';

export const ProductList = () => {
  const navigation = useNavigation();
  const {product} = navigation.params;
  console.log(product)
  return (
    <>
      <RegionalDrop />
      <Button _web={{display: 'none'}} onPress={() => navigation.goBack()}>Back</Button>
      <Filter />
      <Divider height={'3px'} mt="24px" mb="24px" />
      <Flex flexDirection={'column'} width={'full'}>
        <Flex flexDirection={'row'} width={'full'}>
          <Flex flexDirection={'column'} width={'1/2'}>
            <Pressable onPress={() => navigation.navigate(`${product}?name=veuve`)}>
              <Image
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1QukMBWnoHBMfRoF7F3U-uEmde1YvW8fyRdFQdJKMMc_0-xw6mcK2PoMclsxsvZcSmMshTTTTAkoJQSo5YI25hszp4M0bumt2FqQNRtWmzdTY2NF95nTVjA&usqp=CAE"
                height="250px"
                width="full"
                alt="collect"
              />
            </Pressable>
            <Heading>Veuve Clicquot</Heading>
            <Text>Veuve Clicquot 'Yellow Label' Brut Champagne</Text>
            <Text>S$ 900</Text>
            <Flex
              flexDirection={'row'}
              w="full"
              justifyContent={'space-between'}
            >
              <Bookmark />
              <Basket />
            </Flex>
          </Flex>
          <Flex flexDirection={'column'} width={'1/2'}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSs8QHN00Ncc76A74TjVzHSqiRIc9jEgv0gPBKKeQyTi_Q0der5gmB9SDYPKRaB64PxRCtQiwT5moPHgU-ooFHleWU5z3GVxrDlMCs-NVu70-WIV94S250ugA&usqp=CAE"
              height="250px"
              width="full"
              alt="collect"
            />
            <Heading>Louis Roederer</Heading>
            <Text>Louis Roederer Collection 241 Magnum Champagne 150cl</Text>
            <Text>S$ 900</Text>
            <Flex
              flexDirection={'row'}
              w="full"
              justifyContent={'space-between'}
            >
              <Bookmark />
              <Basket />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
