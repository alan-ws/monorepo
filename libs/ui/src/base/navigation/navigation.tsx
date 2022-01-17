/* eslint-disable jsx-a11y/anchor-is-valid */
// https://nextjs.org/docs/routing/introduction
// nextjs uses folder structure for routing
// next/link <Link href="" /> which wraps an anchor tag <a />
// next/router provides useRouter for access to the router

import NLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Flex } from '../../base/layout';

export const NavBar: FC = ({ children }) => {
  return (
    <Flex _css="w-full absolute bottom-0">
      <Flex _css="w-full justify-around">{children}</Flex>
    </Flex>
  );
};

export const Link: FC<{ name: string }> = ({ name }) => {
  return (
    <Flex>
      <NLink href={`${name === 'home' ? '/' : `/${name}`}`}>
        <a>{name.replace(/-and-/, ' & ')}</a>
      </NLink>
    </Flex>
  );
};

export const AppNavigator: FC<{ routes: any[] }> = ({ routes }) => {
  return (
    <NavBar>
      {routes.map((route) => (
        <Link key={route} name={route} />
      ))}
    </NavBar>
  );
};

export const useNavigation = () => {
  const router = useRouter();

  return {
    navigate: (url: string, params?: string) =>
      router.push(params ? `${url}/${params}` : url),
    reset: (url: string) => router.replace(url),
    params: () => router.query,
  };
};
