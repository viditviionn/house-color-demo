import React from "react";
import colorName from "color-name";

const HouseData = ({ house, mapKey }) => {
  let [color1, color2] = house.houseColours.split(" and "); // extracting color names from houseColours key
  let normalized_color1 = color1.toLowerCase();
  let normalized_color2 = color2.toLowerCase();
  let gradientStyle;

  const isValidColor = (color) => {
    // checking for availability of color in CSS
    const normalizedColor = color.toLowerCase();
    return colorName[normalizedColor] !== undefined;
  };

  const getValidColor = (color) => {
    // check if color exist in color list or not
    return isValidColor(color) ? color : false;
  };
  // Directly use the color name without relying on color-name-list
  const colorCode_color1 = getValidColor(normalized_color1);
  const colorCode_color2 = getValidColor(normalized_color2);

  if (!colorCode_color1 || !colorCode_color2) {
    // if any of the color is not exist in colors list then create white-black gradient
    gradientStyle = {
      background: `linear-gradient(to right, white, black)`,
      padding: "10px",
      margin: "10px",
      borderRadius: "8px",
      color: "white", // You can adjust the text color based on the background
    };
  } else {
    gradientStyle = {
      background: `linear-gradient(to right, ${colorCode_color1}, ${colorCode_color2})`,
      padding: "10px",
      margin: "10px",
      borderRadius: "8px",
      color: "white", // You can adjust the text color based on the background
    };
  }

  return (
    <div style={{ textAlign: "-webkit-center" }} key={mapKey}>
      <div className="info-container">
        <div className="tph-info">
          <h2>{house.name}</h2>
          <p>{house.animal}</p>
        </div>
        <div style={gradientStyle}></div>
        <p>
          Founder: <b>{house.founder}</b>
        </p>
      </div>
    </div>
  );
};

export default HouseData;
