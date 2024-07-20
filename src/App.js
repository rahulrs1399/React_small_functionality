import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Accordian from "./component/accordian";
import RandomColor from "./component/random-color";
import StarRating from "./component/start-rating";
import ImageSlider from "./component/imageslider";
import { LoadMoreData } from "./component/Load-more-button";

import TreeView from "./component/tree-view/index";
import menu from "./component/tree-view/data";
import QrCodeGenerator from "./component/QR-code-generator";
import DarkLighMode from "./component/Dark-Light-mode";
import ScrollIndicator from "./component/Scroll-indicator";
import TestTab from "./component/Custom-tabs/tab-test";
import Navigation from "./component/Navigation";
import ModalTest from "./component/custom-modal/modal-test";
import GithubProfileFinder from "./component/GithubProfileFinder";
import SearchSuggestions from "./component/SearchSuggestions";
import TicTactToe from "./component/tic-tact-toe";
import FilterByCategory from "./component/filterByCategory";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <div>
          <Navigation />
          <div>
            <Routes >
              <Route exact path="/" element={<Home />} />
              <Route path="/testtab" element={<TestTab />} />
              <Route path="/filterbycategory" element={<FilterByCategory />} />
              <Route path="/accordian" element={<Accordian />} />
              <Route path="/randomcolor" element={<RandomColor />} />
              <Route path="/starrating" element={<StarRating noOfStar={10} />} />
              <Route path="/imageSlider" element={<ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />} />
              <Route path="/loadmoredata" element={<LoadMoreData />} />
              <Route path="/treeview" element={<TreeView menu={menu}  />} />
              <Route path="/qrcodegenerator" element={<QrCodeGenerator />} />
              <Route path="/darklighmode" element={<DarkLighMode />} />
              <Route path="/scrollindicator" element={<ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />} />
              <Route path="/modaltest" element={<ModalTest />} />
              <Route path="/githubprofilefinder" element={<GithubProfileFinder />} />
              <Route path="/searchsuggestions" element={<SearchSuggestions />} />
              <Route path="/tictacttoe" element={<TicTactToe />} />
            </Routes>
          </div>
        </div>
      </Router> */}

      {/* <Accordian /> */}
      {/* <RandomColor /> */}
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

      {/* <ModalTest /> */}

      {/* <GithubProfileFinder /> */}

      {/* <SearchSuggestions /> */}

      <TicTactToe />

      {/* <FilterByCategory /> */}

    </div>
  );
}

export default App;
