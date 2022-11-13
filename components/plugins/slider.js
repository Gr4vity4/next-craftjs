import { Slider } from "@material-ui/core";

import FontWeight from "../plugins/font-weight";

const SliderPlugin = (props) => {
  // console.log(props.initValue[0]);

  return (
    <div>
      <Slider
        value={props.initValue[0].fontSize}
        onChange={(_, value) => {
          props.syncProp((props) => (props.fontSize = value), 1000);
        }}
      />
      <span>Font Weight</span>
      <div className="pt-3">
        <FontWeight initValue={[{ fontWeight: props.initValue[0].fontWeight }]} syncProp={props.syncProp} />
      </div>
    </div>
  );
};

export default SliderPlugin;
