import { useEffect } from "react";

const CustomButton = (props) => {
  //   useEffect(() => {
  //     console.log(props.fontSize);
  //   }, [props.fontSize]);

  return (
    <button type="button" className="bg-blue-500 px-4 py-2 text-white" data-cy="frame-button">
      <span style={{ fontSize: `${props.fontSize || 14}px`, fontWeight: props.fontWeight }}>Click Me!</span>
    </button>
  );
};

export default CustomButton;
