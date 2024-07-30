import React from "react";
import Basic from "./Basic";
import "./App.css";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Card from "./Components/Cards/Card";
import Movies from "./Components/Movies/Movies";
import EmpData from "./Components/EmpData/EmpData";
import FriendsData from "./Components/FriendsData/FriendsData";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
import Events from "./Components/Events/Events";
import CompA from "./Components/Comp/CompA";
import Parent from './Components/Props/Parent'
import MovieCards from "./Components/PropsMovieCard/MovieCards";
import ToggleButton from "./Components/Hooks/UseState/ToggleButton";
import TogglePara from "./Components/Hooks/UseState/TogglePara";
import ToggleImage from "./Components/Hooks/UseState/ToggleImage";
import ArrayObject from "./Components/Hooks/UseState/ArrayObject";
import ArrayObject2 from "./Components/Hooks/UseState/ArrayObject2";
import ToggleTable from "./Components/Hooks/UseState/ToggleTable";
import QueAns from "./Components/Hooks/UseState/MCQs/QueAns";
import Login from "./Components/Hooks/Login";
import ConditionalRendering from "./Components/ConditionalRendering/ConditionalRendering";
import UseRef from "./Components/Hooks/UseRef/UseRef";
import UserefForms from "./Components/Hooks/UseRef/UserefForms";
import Header from "./Components/ReactRoutine/Header";
import FetchApi from "./Components/FetchApi/FetchApi";
import FetchUsers from "./Components/FetchApi/FetchUsers";

let App = () => {
  return (  
    <React.Fragment>
      {/* <h1>"welcome to React "</h1> */}
      {/* these are the components for re-usablity */}

       {/* <Basic></Basic>/
      <ImageGallery/> 
      <Card />
      <EmpData/> 
      <Movies/>
      <FriendsData/>
      <MusicPlayer/>
      <Events/>
      <CompA/>
      <Parent/>
      <MovieCards/> 

      <ToggleButton/>

      <TogglePara/>

      <ToggleImage/>

      <ArrayObject/>

      <ArrayObject2/>
      
      // <ToggleTable/>

      <Login/>

      <ConditionalRendering/>

      <UseRef/>

      <UserefForms/> 
      

      <Header/>   */}
      {/* <FetchApi/> */}
      {/* <FetchUsers/> */}

      <QueAns/>


    </React.Fragment>


  );
};

export default App;

