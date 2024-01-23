import colorName from "color-name";

const isValidColor = (color) => {
  // You can implement your own logic to check if a color is valid
  // For simplicity, using a predefined list of valid HTML color names
  const normalizedColor = color.toLowerCase();
  return colorName[normalizedColor] !== undefined;
};

const getValidColor = (color) => {
  // check if color exist in color list or not
  return isValidColor(color) ? color : false;
};

export const HouseComponent = ({ house }) => {
  let [color1, color2] = house.houseColours.split(" and "); // extracting color names from houseColours key
  let normalized_color1 = color1.toLowerCase();
  let normalized_color2 = color2.toLowerCase();
  let gradientStyle;

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

  const boxStyle = {
    boxShadow: "0px 2px 10px rgb(0 0 0 / 40%)",
    margin: "30px",
    padding: "10px 30px",
    textAlign: "start",
    borderRadius: "10px",
    fontFamily: "Verdana",
    maxWidth: "450px",
  };

  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <div style={boxStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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

export const HouseList = ({ houses }) => {
  return (
    <div style={{marginTop:'50px'}}>
      {houses.map((house) => (
        <HouseComponent key={house.id} house={house} />
      ))}
    </div>
  );
};
