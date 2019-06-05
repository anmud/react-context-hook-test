import React, {createContext, useState} from 'react'
import DavidGuetta from './DavidGuetta.mp3'
import ImagineDragons from './ImagineDragons.mp3'
import NarcoticThrust from './NarcoticThrust.mp3'



const MusicPlayerContext = createContext([{}, () => {}])

const MusicPlayerProvider = ({children}) => {
    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            {
              name: 'Imagine Dragons - Believer',
              file: ImagineDragons,
            },
            {
              name: 'David Guetta - Say My Name',
              file: DavidGuetta,
            },
            {
              name: 'Narcotic Thrust - When The Dawn Breaks',
              file: NarcoticThrust
            },
          ],
          currentTrackIndex: null,
          isPlaying: false,
    })

    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {children}
        </MusicPlayerContext.Provider>
    );
}

export {MusicPlayerContext, MusicPlayerProvider};