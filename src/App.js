import './App.css';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ImageText from './components/Image-Text/ImageText';
import OurClients from './components/OurClients/OurClients';
import photoBanner1 from "./components/Banner/Illustration.png";
import ImageTextimage from './components/Image-Text/image1.png';


function App() {
  return (
    <div className="body">
      <Header/> 
      <Banner 
        text1="Lessons and insights" 
        text2="from 8 years" 
        text3="Where to grow your business as a photographer: site or social media?"
        button="Register"
        image={photoBanner1}
      />
      <OurClients/>
      <ImageText 
      image={ImageTextimage} 
      text1="The unseen of spending three years at Pixelgrade" 
      text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. 
      Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
      Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. 
      Donec elementum pulvinar odio."
      button="Learn More"
      />


    </div>
  );
}

export default App;
