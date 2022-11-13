const FontWeightPlugin = (props) => {
  const handleNormal = () => {
    props.syncProp((props) => (props.fontWeight = 400), 1000);
  };

  const handleBold = () => {
    props.syncProp((props) => (props.fontWeight = 700), 1000);
  };

  return (
    <div className="flex gap-3">
      <button type="button" className={`${props.initValue === 400 ? "bg-green-200" : "bg-red-200"}  px-4 py-2`} onClick={handleNormal}>
        Normal
      </button>
      <button type="button" className={`${props.initValue === 700 ? "bg-green-200" : "bg-red-200"}  px-4 py-2`} onClick={handleBold}>
        Bold
      </button>
    </div>
  );
};

export default FontWeightPlugin;
