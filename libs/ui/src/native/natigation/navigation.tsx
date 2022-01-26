import { Flex } from 'native-base';
import { useRouter } from 'next/router';
import { FC } from 'react';
import NLink from 'next/link';
import { getNavigation } from '@kaddra-app/management/state';

const NavBar: FC = ({ children }) => {
  return (
    <Flex
      flexDirection={'row'}
      w="full"
      justifyContent={'space-around'}
      overflow={'hidden'}
      position={'fixed'}
      bottom={0}
      bgColor={'white'}
    >
      {children}
    </Flex>
  );
};

export const Link: FC<{ name: string }> = ({ name }) => {
  return (
    <NLink href={`${name === 'home' ? '/' : `/${name}`}`}>
      <a>{name.replace(/-and-/, ' & ')}</a>
    </NLink>
  );
};

export const AppNavigation: FC = () => {
  const routes = getNavigation();

  return (
    <NavBar>
      {routes.map((route) => {
        return (
          <>
            <Link key={route} name={route} />
          </>
        );
      })}
    </NavBar>
  );
};

export const useNavigation = (): {
  navigate: any;
  reset: any;
  params: any;
  replace: any;
  goBack?: any;
} => {
  const router = useRouter();

  return {
    navigate: (url: string, params?: string) =>
      router.push(params ? `${url}/${params}` : url),
    replace: (url: string, params?: string) =>
      router.replace(params ? `${url}/${params}` : url),
    reset: (url: string) => router.replace(url),
    params: router.query,
  };
};
