import PhotoContainer from "./Components/PhotoContainer";

const RenderPhotos = (props: any) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3`}>
      <PhotoContainer
        url={
          "https://www.bramidan.pl/admin/public/getimage.ashx?Crop=0&Image=/Files/Images/01_WEB-2017/04_References/Eiffel-Tower/Web_Eiffel-Tower_slider1_1600x900_Eiffel-Tower-Paris-and-green-lawn.jpg&Format=jpg&Width=2556&Height=0&Quality=75"
        }
        name={"Eiffel Tower"}
        location={"Parris, France"}
        description={
          "Photo of Eiffel Parris taken during summer holidays. A true beauty and a sight to behold."
        }
        darkMode={props.darkMode}
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
        darkMode={props.darkMode}
      />
      <PhotoContainer
        url={
          "https://images.photowall.com/products/45615/coral-reef-at-koh-cahg-island.jpg?h=699&q=85"
        }
        name={"Great Barrier Reef"}
        location={"Australia"}
        description={
          "One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches."
        }
        darkMode={props.darkMode}
      />
      <PhotoContainer
        url={
          "https://sagittariustravel.com/wp-content/uploads/2019/10/egypt-cairo-pyramids-of-giza-and-camels-2.jpg"
        }
        name={"Pyramids of Giza"}
        location={"Giza City, Egypt"}
        description={
          "The Giza Pyramid Complex, also called the Giza Necropolis, is the site on the Giza Plateau in Greater Cairo, Egypt that includes the Great Pyramid of Giza, the Pyramid of Khafre, and the Pyramid of Menkaure, along with their associated pyramid complexes and the Great Sphinx of Giza. All were built during the Fourth Dynasty of the Old Kingdom of Ancient Egypt, between 2600 and 2500 BC. The site also includes several cemeteries and the remains of a workers village."
        }
        darkMode={props.darkMode}
      />
      <PhotoContainer
        url={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg"
        }
        name={"Colosseum"}
        location={"Rome, Italy"}
        description={
          "The Colosseum  is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age. Construction began under the emperor Vespasian ( 69–79 AD) in 72 and was completed in 80 AD under his successor and heir, Titus "
        }
        darkMode={props.darkMode}
      />
      <PhotoContainer
        url={"https://cdn.getyourguide.com/img/tour/5cadc48555e11.jpeg/148.jpg"}
        name={"Stonehenge"}
        location={"	Wiltshire, England"}
        description={
          "Stonehenge is a prehistoric monument on Salisbury Plain in Wiltshire, England, two miles (3 km) west of Amesbury. It consists of an outer ring of vertical sarsen standing stones, each around 13 feet (4.0 m) high, seven feet (2.1 m) wide, and weighing around 25 tons, topped by connecting horizontal lintel stones. Inside is a ring of smaller bluestones. Inside these are free-standing trilithons, two bulkier vertical Sarsens joined by one lintel. The whole monument, now ruinous, is orientated towards the sunrise on the summer solstice."
        }
        darkMode={props.darkMode}
      />
    </div>
  );
};

export default RenderPhotos;
