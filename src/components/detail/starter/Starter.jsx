import React, {useState} from 'react';
import ToggleSwitch from '@trendmicro/react-toggle-switch';
import '@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';
import PlayPause from "./PlayPause";

function Starter() {
    const [state, setState] = useState({ showPlayButton: true });

    const toggled = (value) => {
        console.log(value)
    }

    const { showPlayButton } = state

    return (
        <div style={{textAlign: 'right', float: "right"}}>
            <button
                id='play-pause'
                onClick={() => setState({ showPlayButton: !showPlayButton })}
                style={{
                    border: "none",
                    backgroundColor: showPlayButton ? "rgb(0, 128, 0, 0.6)" : "rgb(255, 0, 0, 0.8)",
                    boxShadow: "0 0 12px 6px rgba(0,0,0,.2)",
                    cursor: "pointer",
                    height: 40,
                    outline: "none",
                    borderRadius: "100%",
                    width: 40,
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <PlayPause buttonToShow={showPlayButton} />
            </button>
            <p htmlFor='play-pause' className='mt-2'>Play / Pause</p>
        </div>
    );
}

export default Starter;