import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from 'react';
import {
  ScrollView,
  Pressable,
  Button,
  Slide,
  Flex,
  Divider,
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, checkoutSlice } from '@kaddra-app/state';
import { useVerifyStockLevelMutation } from '@kaddra-app/request';

function useGetProductQuantitis(productId?: string): { quantites?: string[] } {
  const quantites = useSelector(
    (state: RootState) =>
      state.product.products?.find((value) => value.id === productId)
        ?.quantities
  );
  return { quantites: quantites };
}

function useAddToBasket() {
  const dispatch = useDispatch();
  const [toastDetails, setToastDetails] = useState<{msg: string; state: 'success' | 'error'}>();
  const [verifyStockLevel, { isLoading }] = useVerifyStockLevelMutation();

  const handler = async (amount: number, productid?: string) => {
    try {
      if (!productid) return;
  
      const stockLevels = await verifyStockLevel({
        productId: productid,
        quantity: 4,
      }).unwrap();

      if (stockLevels[0].quantity >= amount) {
        setToastDetails({
          msg: 'Product X has been added to basket',
          state: 'success',
        });
        dispatch(
          checkoutSlice.actions.updateBasket({
            product: productid,
            quantity: amount,
            value: amount * 10,
          })
        );
      } else {
        setToastDetails({
          msg: `Only ${stockLevels[0].quantity} avaliable`,
          state: 'success',
        });
      }
    } catch (err) {
      setToastDetails({
        msg: 'Could not add to basket',
        state: 'error',
      });
    }
  };

  return {
    handler,
    isLoading,
    toastDetails,
  }
}

export const BasketDrawer: FC<{
  productid?: string;
  isopen: boolean;
  setvisible: Dispatch<SetStateAction<boolean>>;
  settoast: React.Dispatch<
    React.SetStateAction<
      | {
          msg: string;
          state: 'success' | 'error';
        }
      | undefined
    >
  >;
}> = ({ productid, isopen, setvisible, settoast }) => {
  const { quantites } = useGetProductQuantitis(productid);
  const {handler, isLoading, toastDetails} = useAddToBasket()
  const [amount, setAmount] = useState<number>(0);

  if (toastDetails) settoast(toastDetails)

  return (
    <Slide in={isopen} placement="bottom">
      <Flex
        position={'absolute'}
        bottom={0}
        flexDirection={'column'}
        width={'full'}
        height={'1/3'}
        backgroundColor={'white'}
        borderRightRadius={'24'}
        borderLeftRadius={'24'}
      >
        <ScrollView
          _contentContainerStyle={{
            px: '20px',
            mb: '4',
            minW: '72',
          }}
        >
          <Pressable onPress={() => setvisible((prev) => !prev)}>
            <Flex flexDirection={'row'} width={'1/5'} alignSelf={'center'}>
              <Divider height={'4px'} mt={'8px'} mb="8px" />
            </Flex>
          </Pressable>
          <Flex flexDirection={'row'} width={'full'}>
            {quantites &&
              quantites.map((value: string) => (
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
                <Button
                  onPress={() =>
                    setAmount((amt) => (amt === 0 ? amt : amt - 1))
                  }
                >
                  -
                </Button>
              </Flex>
              <Flex>{amount}</Flex>
              <Flex>
                <Button onPress={() => setAmount((amt) => amt + 1)}>+</Button>
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
            <Button
              onPress={() => {
                setvisible(prev => !prev)
                handler(amount, productid)
              }}
              disabled={amount === 0}
              isLoading={isLoading}
            >
              ADD TO BAG
            </Button>
          </Flex>
        </ScrollView>
      </Flex>
    </Slide>
  );
};
