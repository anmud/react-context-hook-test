import {useContext} from 'react'
import {MusicPlayerContext} from '../MusicPlayerContext'

const useMusicPlayer = () => {
    const [state, setState] = useContext(MusicPlayerContext)

    const playTrack = index => {
        index === state.currentTtackIndex 
        ? togglePlay()
        :   state.audioPlayer.pause()
            state.audioPlayer = new Audio(state.tracks[index].file)
            state.audioPlayer.play()
            setState(state => ({...state, currentTrackIndex: index, isPlaying: true}))
        
    }


    const togglePlay = () => {
        state.isPlaying ? state.audioPlayer.pause() : state.audioPlayer.play()
    
        return   setState(state => ({...state, isPlaying: !state.isPlaying}))
    }


    const playPreviousTrack = () => {
        const newIndex = ((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
        playTrack(newIndex)
    }
           
    const playNexTrack = () => {
          const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
          playTrack(newIndex)
    }

    return {
        playTrack,
        togglePlay,
        currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
        trackList: state.tracks,
        isPlaying: state.isPlaying,
        playPreviousTrack,
        playNexTrack,
    }
};

export default useMusicPlayer;