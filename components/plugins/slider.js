import { Slider } from "@material-ui/core";

const SliderPlugin = (props) => {
  return (
    <Slider
      value={props.initValue}
      onChange={(_, value) => {
        props.syncProp((props) => (props.fontSize = value), 1000);
      }}
    />
  );
};

export default SliderPlugin;
