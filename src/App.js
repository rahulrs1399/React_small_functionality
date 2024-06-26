import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import './App.css';
// import Accordian from './component/accordian';
// import RandomColor from './component/random-color';
// import StarRating from './component/start-rating';
// import ImageSlider from './component/imageslider';
// import { LoadMoreData } from "./component/Load-more-button";

import TreeView from "./component/tree-view/index";
import menu from "./component/tree-view/data";
import QrCodeGenerator from "./component/QR-code-generator";
import DarkLighMode from "./component/Dark-Light-mode";
import ScrollIndicator from "./component/Scroll-indicator";
import Tab from "./component/Custom-tabs/tabs";
import TestTab from "./component/Custom-tabs/tab-test";
import Navigation from "./component/Navigation";


function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
      <Routes>
        <Route>
          <Route path="tabs" element={<TestTab />} />
        </Route>
      </Routes>
    </Router>


      {/* <Accordian />
      <RandomColor /> */}
      {/* <StarRating noOfStar={10}/> */}

      {/* Image Slider */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> */}

      {/* <LoadMoreData /> */}

      {/* <TreeView menu={menu} /> */}

      {/* <QrCodeGenerator /> */}

      {/* <DarkLighMode /> */}

      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

      {/* Custom tab Component */}
      {/* <TestTab /> */}

    </div>
  );
}

export default App;
