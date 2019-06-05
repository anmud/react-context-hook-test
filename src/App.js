import React from 'react';
import {MusicPlayerProvider} from "./MusicPlayerContext"
import TrackList from "./components/TrackList"
import PlayerControls from './components/PlayerControls'

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList/>
        <PlayerControls/>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
