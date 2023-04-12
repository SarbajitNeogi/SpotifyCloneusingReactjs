import React, { useEffect, useState } from "react";
//import React from "react";
import "./App.css";
import Login from './Login'
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { DataLayer, useDataLayerValue } from "./DataLayer";
import { Dispatch } from "react";


const spotify = new SpotifyWebApi();

function App() {

  //const [token , setToken] = useState(null);
  const [{user,token},dispatch]=useDataLayerValue();

  //runs code based on a given condition
  useEffect(() => {
    
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token){

      dispatch({
        type:"SET_TOKEN",
        token:_token,
    });
    

     

      spotify.setAccessToken(_token);

      spotify.getMe().then(user=> {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotify.getPlaylist('37i9dQZEVXcOrRk7U5HO9d').then(response=>
      
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
      
      )
  }
  }, []);
  
  return (
    //BEM
    <div className="app">
   {
    token ? (
      <Player spotify={spotify}/>
    ) : (
      <Login/>

    )
   }



    </div>
  );
}

export default App;
