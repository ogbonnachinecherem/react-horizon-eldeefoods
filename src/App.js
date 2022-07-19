import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Thumbnail from './components/Thumbnail';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Carousel carousel_slogan="At Eldee Office, we believe that the beauty of life
       lies in the little things that give us a better expression of ourselves,
        make us more social and connect emotionally.."
      />
      <Thumbnail title="Our Most Ordered"/>
      <Footer foot="&copy; 2022 Eldeefoods  Rights Reserved."/>
    </>
  );
}

export default App;
