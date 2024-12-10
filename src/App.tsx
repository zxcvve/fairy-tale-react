import "./App.css";
import Tale1 from "./components/tales/Tale1";
import Tale2 from "./components/tales/Tale2";
import Tale3 from "./components/tales/Tale3";

function App() {
  return (
    <>
      {/* <div className="map">
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
                    console.log("You clicked on " + geo.properties.name);
                    if (
                      Object.keys(regionTales).includes(geo.rsmKey) &&
                      Object.keys(regionTales).includes(geo.rsmKey)
                    ) {
                      const element = document.getElementById(
                        regionTales[geo.rsmKey as keyof typeof regionTales]
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
      </div> */}
      <div className="tales">
        <div id="tale-region1">
          <Tale1 />
        </div>
        <div id="tale-region2">
          <Tale2 />
        </div>
        <div id="tale-region3">
          <Tale3 />
        </div>
      </div>
    </>
  );
}

export default App;
