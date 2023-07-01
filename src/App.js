import './App.css';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ImageText from './components/Image-Text/ImageText';
import OurClients from './components/OurClients/OurClients';
import InfoNumbers from './components/InfoNumbers/InfoNumbers';
import photoBanner1 from "./img/computer.png"; 
import ImageTextimage from './img/couple.png';
import imagePana from './img/pana.png';


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

      <InfoNumbers/>


      <ImageText image={imagePana}
      text1="How to design your site footer like we did"
      text2="Donec a eros justo. Fusce egestas tristique ultrices. 
      Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. 
      In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. 
      Integer in nisi eget nulla commodo faucibus efficitur quis massa. 
      Praesent felis est, finibus et nisi ac, hendrerit venenatis libero."
      button="Learn More"
      />





    </div>
  );
}

export default App;
