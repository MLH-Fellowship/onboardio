import React from "react";
import Select from "react-select";
import { useColorMode } from "@chakra-ui/core";
import { getReactSelectStyle } from "../styles/DropdownStyle";

const MultiSelect = (props) => {
  const { options, values, onChange, placeholder } = props;
  const { colorMode } = useColorMode();

  return (
    <Select
      isMulti
      styles={getReactSelectStyle(colorMode)}
      placeholder={placeholder}
      value={values}
      onChange={onChange}
      options={options}
      classNamePrefix="select"
    />
  );
};

export { MultiSelect };
