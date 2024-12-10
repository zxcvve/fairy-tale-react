import "./App.css";
import Tale1 from "./components/tales/Tale1";
import Tale2 from "./components/tales/Tale2";
import Tale3 from "./components/tales/Tale3";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const allowedRegions = ["sakha"];
const screenDimensions = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
};
function App() {
  return (
    <>
      <div className="map">
        <ComposableMap
          projection="geoMercator"
          height={500}
          projectionConfig={{
            scale: 200,
            center: [110, 60], // Центр России примерно [90°E, 60°N]
          }}
        >
          <Geographies geography="russia.geojson">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#E5E5E5",
                      stroke: "#000000",
                      outline: "none",
                    },
                    hover: {
                      fill: "#A5A5A5",
                      stroke: "#000000",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#808080",
                      stroke: "#000000",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                  }}
                  onClick={() => {
                    alert("You clicked on " + geo.properties.name);
                    const regionId = geo.properties.id?.toLowerCase();
                    if (allowedRegions.includes(regionId)) {
                      const element = document.getElementById(
                        `tale-${regionId}`
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
      <div className="tales">
        <Tale1 />
        <Tale2 />
        <Tale3 />
      </div>
    </>
  );
}

export default App;
