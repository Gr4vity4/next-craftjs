import { useNode } from "@craftjs/core";
import { FormControl, FormLabel } from "@material-ui/core";
import React from "react";
import CustomButton from "../custom/button";

// import plugins
import Slider from "../plugins/slider";
import FontWeight from "../plugins/font-weight";

export const Button = ({ size, variant, color, text, fontSize, fontWeight, ...props }) => {
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
      <CustomButton ref={(ref) => connect(drag(ref))} fontSize={fontSize} fontWeight={fontWeight} {...props}>
        Click Me!
      </CustomButton>
    </div>
  );
};

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    fontWeight,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
  }));

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Font Size</FormLabel>
        <Slider initValue={fontSize} syncProp={setProp} />
        <br />
        <FormLabel component="legend">Font Weight</FormLabel>
        <div className="pt-3">
          <FontWeight initValue={fontWeight} syncProp={setProp} />
        </div>
      </FormControl>
    </div>
  );
};

export const ButtonDefaultProps = {
  size: "small",
  variant: "contained",
  color: "primary",
  text: "Click me",
  fontWeight: 400,
};

Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};
