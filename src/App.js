import './App.css';
import FooterLayout from './components/mobile/FooterLayout';
import HeaderLayout from './components/header/HeaderLayout';
import PinterestLayout from './components/pin/PinterestLayout';
import MobileHeader from './components/mobile/MobileHeader';

const App = () => {
  return (
    <div>
      <HeaderLayout />
      <MobileHeader/>
      <PinterestLayout />
      <FooterLayout />
    </div>
  );
};

export default App;
