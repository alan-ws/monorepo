import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import {
  ScrollView,
  Pressable,
  Button,
  Slide,
  Flex,
  Divider,
} from 'native-base';

export const BasketDrawer: FC<{
  isopen: boolean;
  setvisible: Dispatch<SetStateAction<boolean>>;
  setshowtoast: Dispatch<SetStateAction<boolean>>;
}> = ({ isopen, setvisible, setshowtoast }) => {
  const quantity = ['half case', 'case', '2 cases', 'bottle'];
  const [amount, setAmount] = useState<number>(0)

  return (
    <Slide in={isopen} placement="bottom">
      <Flex
        position={'absolute'}
        bottom={0}
        flexDirection={'column'}
        width={'full'}
        height={'1/3'}
        backgroundColor={'white'}
        borderRightRadius={"24"}
        borderLeftRadius={"24"}
      >
        <ScrollView
          _contentContainerStyle={{
            px: '20px',
            mb: '4',
            minW: '72',
          }}
        >
          <Pressable onPress={() => setvisible((prev) => !prev)}>
            <Flex flexDirection={'row'} width={'1/5'} alignSelf={"center"}>
              <Divider height={'4px'} mt={'8px'} mb="8px" />
            </Flex>
          </Pressable>
          <Flex flexDirection={'row'} width={'full'}>
            {quantity.map((value: string) => (
              <Button key={value}>{value}</Button>
            ))}
          </Flex>
          <Flex width={'full'} flexDirection={'row'}>
            <Flex flexDirection={'column'} width={'1/2'}>
              <Flex>1 x 75 cL</Flex>
              <Flex>$789.00 per bottle</Flex>
            </Flex>
            <Flex
              flexDirection={'row'}
              width={'1/2'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Flex>
                <Button onPress={() => setAmount(amt => amt === 0 ? amt : amt - 1)}>-</Button>
              </Flex>
              <Flex>{amount}</Flex>
              <Flex>
                <Button onPress={() => setAmount(amt => amt + 1)}>+</Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            width={'full'}
            flexDirection={'row'}
            justifyContent={'space-between'}
          >
            <Flex>subtotal</Flex>
            <Flex>$789.00</Flex>
          </Flex>
          <Flex
            width={'full'}
            flexDirection={'row'}
            justifyContent={'space-between'}
          >
            <Button onPress={() => setvisible((prev) => !prev)}>CANCEL</Button>
            <Button onPress={async () => {
              setvisible((prev) => !prev);
              try {
                const user = await verifyStock({
                  productId: 1,
                  amount: amount
                }).unwrap();
                dispatch(checkoutSlice.action.addToBasket(user));
                setshowtoast(true)
              } catch (err) {
                setshowtoast(true, {msg: 'Could not be added to basket', state: 'error'})
              }
            }} disabled={amount === 0}>
              ADD TO BAG
            </Button>
          </Flex>
        </ScrollView>
      </Flex>
    </Slide>
  );
};
