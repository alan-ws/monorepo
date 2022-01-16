import React, { FC, useState } from 'react';
import { Box } from '../../base/layout';
import { Text } from '../../base/typography';

type Icon = string | 'down-arrorw';

export interface IDropdown {
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

const Content: FC<{
  onpress: (e: any) => void;
  content: string[];
  reveal: boolean;
}> = (props) => {
  const passBack = (value: string) => {
    props.onpress(value);
  };

  return (
    <Box _css={`absolute z-10`}>
      {props.reveal
        ? props.content.map((value: string, index: number) => {
            return (
              <Text key={`${value}_${index}`} onpress={() => passBack(value)}>
                {value}
              </Text>
            );
          })
        : null}
    </Box>
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
  const handleSelect = (value: string) => {
    setLabel(value);
    handleDisplayContent();
  };
  const handleDisplayContent = () => {
    setReveal((prevState) => !prevState);
  };

  return (
    <Box _css={`relative ${reveal ? 'block' : 'inline-block'}`}>
      {Array.isArray(props.content) ? (
        <>
          <Label onpress={handleDisplayContent}>{label}</Label>
          <Content
            onpress={handleSelect}
            content={props.content}
            reveal={reveal}
          />
        </>
      ) : (
        <Label onpress={handleDisplayContent} onhover={handleHover}>
          {props.content}
        </Label>
      )}
    </Box>
  );
};
