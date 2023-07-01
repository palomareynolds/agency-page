import './App.css';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import OurClients from './components/OurClients/OurClients';
import photoBanner1 from "./components/Banner/Illustration.png";


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


    </div>
  );
}

export default App;
