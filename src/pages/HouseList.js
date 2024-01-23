import { useEffect, useState } from "react";
import "./HouseList.css";
import loaderImg from "../../src/assets/images/loader.gif";
import HouseData from "../components/HouseData";
import { apiCall } from "../utils/httpClient";
import apiEndPoints from "../utils/apiEndPoints";

export const HouseList = () => {
  const [houseData, setHouseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getHouseData();
  }, []);

  const getHouseData = async () => {
    setIsLoading(true);
    try {
      await apiCall("GET", apiEndPoints.HOUSES)
        .then((response) => {
          setHouseData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };

  return (
    <div style={{ margin: "50px 0" }}>
      {isLoading ? (
        <div className="css-loader">
          <img src={loaderImg} style={{ width: "450px" }} />
        </div>
      ) : (
        houseData.map((house) => <HouseData mapKey={house.id} house={house} />)
      )}
    </div>
  );
};
