import "./App.css";
import PhotoContainer from "./Components/PhotoContainer";

function App() {
  return (
    <div className="App">
      <PhotoContainer
        url={
          "https://www.bramidan.pl/admin/public/getimage.ashx?Crop=0&Image=/Files/Images/01_WEB-2017/04_References/Eiffel-Tower/Web_Eiffel-Tower_slider1_1600x900_Eiffel-Tower-Paris-and-green-lawn.jpg&Format=jpg&Width=2556&Height=0&Quality=75"
        }
        name={"Eiffel tower"}
        location={"Parris"}
      />
    </div>
  );
}

export default App;
