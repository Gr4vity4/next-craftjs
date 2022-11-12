import { useNode } from "@craftjs/core";
import { FormControl, FormLabel } from "@material-ui/core";
import React from "react";
import Slider from "../plugins/slider";
import CustomButton from "../custom/button";

export const Button = ({ size, variant, color, text, fontSize, ...props }) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  return (
    <div {...props} ref={(ref) => connect(drag(ref))} onClick={() => selected}>
      <CustomButton ref={(ref) => connect(drag(ref))} fontSize={fontSize} {...props}>
        Click Me!
      </CustomButton>
    </div>
  );
};

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Font Size</FormLabel>
        <Slider initValue={fontSize} syncProp={setProp} />
      </FormControl>
    </div>
  );
};

export const ButtonDefaultProps = {
  size: "small",
  variant: "contained",
  color: "primary",
  text: "Click me",
};

Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};
