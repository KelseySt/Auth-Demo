import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navigation isHome={true} isLoggedIn={false}/>

      <Splash/> 

      <Footer/>
    </div>
  );
}
