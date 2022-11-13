import { useNode } from "@craftjs/core";
import { FormControl, FormLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";

// import plugins
import Slider from "../plugins/slider";
import FontWeight from "../plugins/font-weight";

export const Text = ({ text, fontSize, fontWeight, textAlign, ...props }) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }

    setEditable(false);
  }, [selected]);

  return (
    <div {...props} ref={(ref) => connect(drag(ref))} onClick={() => selected && setEditable(true)}>
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) => setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")), 500)}
        tagName="p"
        style={{ fontSize: `${fontSize}px`, fontWeight: fontWeight, textAlign }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    fontWeight,
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider initValue={fontSize} syncProp={setProp} />
        <br />
        <FormLabel component="legend">Font Weight</FormLabel>
        <div className="pt-3">
          <FontWeight initValue={fontWeight} syncProp={setProp} />
        </div>
      </FormControl>
    </>
  );
};

export const TextDefaultProps = {
  text: "Hi",
  fontSize: 20,
  fontWeight: 400,
};

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};
