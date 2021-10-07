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
        location={"Parris, France"}
        description={
          "Photo of Eiffel Parris taken during summer holidays. A true beauty and a sight to behold."
        }
      />
      <PhotoContainer
        url={
          "https://1.bp.blogspot.com/-Ll8S3mO0kcE/VuWuAkdN-pI/AAAAAAAAA38/7-cY0u8Wt4sd5XXLqudOWfTGzA_cAXpXg/s1600/wielki%2Bkanion.jpg"
        }
        name={"Grand Canyon"}
        location={"Arizona, United States"}
        description={
          "The Grand Canyon is a mile-deep gorge in northern Arizona. Scientists estimate the canyon may have formed 5 to 6 million years ago when the Colorado River began to cut a channel through layers of rock."
        }
      />
      <PhotoContainer
      url={"https://images.photowall.com/products/45615/coral-reef-at-koh-cahg-island.jpg?h=699&q=85"}
      name={"Great Barrier Reef"}
      location={"Australia"}
      description={"One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches."}
      />

    </div>
  );
}

export default App;
