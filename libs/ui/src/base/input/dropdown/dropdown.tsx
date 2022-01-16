import { FC, useEffect, useState } from 'react';
import { Flex } from '@kaddra-app/ui';
import { Text } from '../../typography';

type Icon = string | 'down-arrorw';

interface IDropdown {
  content: string | string[];
  icon?: Icon;
  // we want to have onhover and onselect for diff functionality
}

const Label: FC<{ onpress?: (e: any) => void; onhover?: (e: any) => void }> = ({
  children,
  onpress,
  onhover,
}) => {
  return <Text onpress={onpress}>{children}</Text>;
};

const Content: FC<{ onpress: (e: any) => void; content: string[]; reveal: boolean }> = (
  props
) => {
  console.log(props.reveal)
  return (
    <Flex _css={`${props.reveal ? 'block' : 'hidden'} absolute z-10`}>
      {props.content.map((value: string, index: number) => {
        return (
          <Text key={`${value}_${index}`} onpress={props.onpress}>
            {value}
          </Text>
        );
      })}
    </Flex>
  );
};

export const Dropdown: FC<IDropdown> = (props) => {
  const [label, setLabel] = useState<string>(
    Array.isArray(props.content) ? props.content[0] : props.content
  );
  const [reveal, setReveal] = useState<boolean>(false);

  const handleHover = (e: any) => {
    console.log('hover');
  };
  const handleSelect = (e: any) => {
    console.log('select');
  };
  const handleDisplayContent = (e: any) => {
    setReveal((prevState) => !prevState)
  };

  return (
    <Flex _css="relative inline-block">
      {Array.isArray(props.content) ? (
        <>
          <Label onpress={handleDisplayContent}>{label}</Label>
          <Content onpress={handleSelect} content={props.content} reveal={reveal} />
        </>
      ) : (
        <Label onpress={handleDisplayContent} onhover={handleHover}>
          {props.content}
        </Label>
      )}
    </Flex>
  );
};
