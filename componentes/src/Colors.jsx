import Color from "./Color";

const Colors = ({ colorArray }) => {
    return (
      <ul>
        {colorArray.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    );
  };
  
export default Colors;