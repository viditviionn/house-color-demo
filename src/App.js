import "./App.css";
import { HouseList } from "./HouseList";
import axios from "axios";
import { useEffect, useState } from "react";
import loaderImg from "../src/assets/images/loader.gif";

function App() {
  const [houseData, setHouseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getHouseData();
  }, []);

  const getHouseData = async () => {
    setIsLoading(true);
    try {
      axios
        .get(" https://wizard-world-api.herokuapp.com/houses")
        .then((res) => {
          setHouseData(res.data);
          setIsLoading(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="App">
      {isLoading ? (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
          <img src={loaderImg} style={{width:'450px'}}/>
        </div>
      ) : (
        <HouseList houses={houseData} />
      )}
    </div>
  );
}

export default App;
