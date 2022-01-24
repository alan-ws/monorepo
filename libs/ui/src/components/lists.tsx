import React, { Dispatch, FC, SetStateAction } from 'react';
import { getCategoryList } from '@kaddra-app/management/state';
import {
  VStack,
  ZStack,
  Text,
  Box,
  Flex,
  Image,
  Pressable,
  Button,
  Divider,
  Heading,
  ScrollView,
  Slide,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Basket, Bookmark, Filter, RegionalDrop } from '..';

const ProductList = () => {
  const navigation = useNavigation();

  return (
    <>
      <RegionalDrop />
      <Button onPress={() => navigation.goBack()}>Back</Button>
      <Filter />
      <Divider height={'3px'} mt="24px" mb="24px" />
      <Flex flexDirection={'column'} width={'full'}>
        <Flex flexDirection={'row'} width={'full'}>
          <Flex flexDirection={'column'} width={'1/2'}>
            <Pressable onPress={() => navigation.navigate('product')}>
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

const BasketDrawer: FC<{
  isopen: boolean;
  setvisible: Dispatch<SetStateAction<boolean>>;
}> = ({ isopen, setvisible }) => {
  const quantity = ['half case', 'case', '2 cases', 'bottle'];
  return (
    <Slide in={isopen} placement="bottom">
      <Flex
        position={'absolute'}
        bottom={0}
        flexDirection={'column'}
        width={'full'}
        height={'1/3'}
        backgroundColor={'white'}
      >
        <ScrollView
          _contentContainerStyle={{
            px: '20px',
            mb: '4',
            minW: '72',
          }}
        >
          <Pressable onPress={() => setvisible((prev) => !prev)}>
            <Flex flexDirection={'row'} width={'1/5'}>
              <Divider height={'4px'} mt={'8px'} mb="8px" />
            </Flex>
          </Pressable>
          <Flex flexDirection={'row'} width={'full'}>
            {quantity.map((value: string) => (
              <Button>{value}</Button>
            ))}
          </Flex>
          <Flex width={'full'} flexDirection={'row'}>
            <Flex flexDirection={'column'} width={'1/2'}>
              <Flex>1 x 75 cL</Flex>
              <Flex>$789.00 per bottle</Flex>
            </Flex>
            <Flex flexDirection={'row'} width={'1/2'} justifyContent={"space-between"} alignItems={"center"}>
              <Flex>
                <Button>-</Button>
              </Flex>
              <Flex>1</Flex>
              <Flex>
                <Button>+</Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex width={'full'} flexDirection={'row'} justifyContent={"space-between"}>
            <Flex>subtotal</Flex>
            <Flex>$789.00</Flex>
          </Flex>
          <Flex width={'full'} flexDirection={'row'} justifyContent={"space-between"}>
            <Button onPress={() => setvisible((prev) => !prev)}>CANCEL</Button>
            <Button onPress={() => setvisible((prev) => !prev)}>ADD TO BAG</Button>
          </Flex>
        </ScrollView>
      </Flex>
    </Slide>
  );
};

const Product = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        _contentContainerStyle={{
          px: '20px',
          mb: '4',
          minW: '72',
        }}
      >
        <Button onPress={() => navigation.goBack()}>Back</Button>
        <Flex flexDirection={'column'} width={'full'} alignItems={'center'}>
          <Image
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1QukMBWnoHBMfRoF7F3U-uEmde1YvW8fyRdFQdJKMMc_0-xw6mcK2PoMclsxsvZcSmMshTTTTAkoJQSo5YI25hszp4M0bumt2FqQNRtWmzdTY2NF95nTVjA&usqp=CAE"
            height="350px"
            width="2/3"
            alt="collect"
          />
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
      <BasketDrawer isopen={isOpen} setvisible={setIsOpen} />
    </>
  );
};

const ProductStack = createNativeStackNavigator();
const ProductPage = () => {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name={'productPage'}
        options={{ headerShown: false }}
        component={ProductList}
      />
      <ProductStack.Screen
        name={'product'}
        options={{ headerShown: false }}
        component={Product}
      />
    </ProductStack.Navigator>
  );
};

const CategoriesStack = createNativeStackNavigator();

const Outlet = () => {
  const navigation = useNavigation();
  const categories = ['wine', 'champagne', 'spirits & wine'];

  return (
    <>
      <RegionalDrop />
      <Button onPress={() => navigation.goBack()}>Back</Button>
      <VStack>
        {categories.map((value) => (
          <Button onPress={() => navigation.navigate('product_list')}>
            {value}
          </Button>
        ))}
      </VStack>
    </>
  );
};

export const Categories = () => {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name={'categorystack'}
        options={{ headerShown: false }}
        component={Outlet}
      />
      <CategoriesStack.Screen
        name={'product_list'}
        options={{ headerShown: false }}
        component={ProductPage}
      />
    </CategoriesStack.Navigator>
  );
};

export const Category = () => {
  const categories = getCategoryList();
  const navigation = useNavigation();

  return (
    <VStack mt="8">
      {categories.map((value, index) => {
        return (
          <Pressable
            key={`${value.category}_${index}`}
            onPress={() => navigation.navigate('category')}
          >
            <ZStack
              height="128px"
              key={`${value.category}_${index}`}
              mt="2"
              justifyContent={'center'}
            >
              <Box height={'128px'} width="100%">
                <Image
                  src={value.imgUri}
                  alt={value.category}
                  height={'128px'}
                  width="100%"
                />
              </Box>
              <Text
                ml={'6'}
                color={'white'}
                fontSize={'24px'}
                fontWeight={'bold'}
              >
                {value.category.replace(/-and-/, ' & ')}
              </Text>
            </ZStack>
          </Pressable>
        );
      })}
    </VStack>
  );
};
