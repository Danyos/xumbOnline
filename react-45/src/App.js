import './App.css'

import Bgsound from './background.mp3';
import Bgsound2 from './music_01.mp3';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useEffect, useRef, useState} from "react";

function App() {
    const rootRef = useRef(null);
    const audioRef = useRef(null);
    const [PopUp,setPopUp] = useState(true);
    const [music,setmusic] = useState(Bgsound);

        useEffect(()=>{
          setTimeout(()=>{
              setmusic(Bgsound2)
              audioRef.current.play()
          },5000)

        },[PopUp])
  return (
    <div className="App">
        {PopUp&&<div>
            <Box
                sx={{
                    height: 300,
                    flexGrow: 1,
                    minWidth: 300,
                    transform: 'translateZ(0)',
                    // The position fixed scoping doesn't work in IE11.
                    // Disable this demo to preserve the others.
                    '@media all and (-ms-high-contrast: none)': {
                        display: 'none',
                    },
                }}
                ref={rootRef}
            >
                <Modal
                    disablePortal
                    disableEnforceFocus
                    disableAutoFocus
                    open
                    aria-labelledby="server-modal-title"
                    aria-describedby="server-modal-description"
                    sx={{
                        display: 'flex',
                        p: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    container={() => rootRef.current}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: (theme) => theme.shadows[5],
                            p: 4,
                        }}
                    >
                        <Typography id="server-modal-title" variant="h6" component="h2">
                            Server-side modal
                        </Typography>
                        <Typography id="server-modal-description" sx={{pt: 2}}>
                            If you disable JavaScript, you will still see me.
                        </Typography>

                        <button onClick={()=>{
                            setPopUp(false)
                            audioRef.current.play()
                        }
                        }>&#x1F683;</button>
                    </Box>
                </Modal>
            </Box>
        </div>}
        <audio ref={audioRef} src={music}  controls hidden />
    </div>
  );
}

export default App;
