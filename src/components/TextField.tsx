import React, { ChangeEvent, ChangeEventHandler, ReactNode } from "react";
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
  onChange: ChangeEventHandler<HTMLInputElement>;
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
      {leftElement && (
        <InputLeftElement children={leftElement} pointerEvents="none" />
      )}
      <Input
        backgroundColor={"grey.900"}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        borderColor="grey.700"
        borderWidth="1px"
        color="white"
        textStyle={"smBodyMedium"}
        {...rest}
      />
      {rightElement && <InputRightElement children={rightElement} />}
      {rightAddon && (
        <InputRightAddon children={rightAddon} pointerEvents="none" />
      )}
    </InputGroup>
  );
};

export default TextField;
