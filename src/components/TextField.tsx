import React, { ReactNode } from "react";
import {
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";

type Props = {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  leftAddon?: string | ReactNode;
  rightAddon?: string | ReactNode;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({
  leftElement,
  rightElement,
  leftAddon,
  rightAddon,
  placeholder,
  type,
  value,
  onChange,
  ...rest
}: Props) => {
  return (
    <InputGroup>
      {leftAddon && <InputLeftAddon children={leftAddon} />}
      {leftElement && <InputLeftElement children={leftElement} />}
      <Input type={type} {...rest} />
      {rightElement && <InputRightElement children={rightElement} />}
      {rightAddon && <InputRightAddon children={rightAddon} />}
    </InputGroup>
  );
};

export default TextField;
