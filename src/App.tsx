import "./App.css";
import Russia from "@react-map/russia";
import Tale1 from "./components/tales/Tale1";
import Tale2 from "./components/tales/Tale2";
import Tale3 from "./components/tales/Tale3";

const allowedRegions = ["sakha"];
const screenDimensions = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
};
function App() {
  return (
    <>
      <div className="map">
        <Russia
          type="select-single"
          hints={true}
          size={screenDimensions.screenWidth - 300}
          onSelect={(state) => {
            const lowerCaseState = (state as string).toLowerCase();
            if (
              lowerCaseState != null &&
              allowedRegions.includes(lowerCaseState)
            ) {
              const element = document.getElementById(`tale-${lowerCaseState}`);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
        />
        <div className="tales">
          <Tale1 />
          <Tale2 />
          <Tale3 />
        </div>
      </div>
    </>
  );
}

export default App;
