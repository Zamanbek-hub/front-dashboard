import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery.min';
import "./Upload.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    alignItems: 'center',
};

export default function UploadModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [fileName, setFileName] = React.useState('Upload excel file')

    const handleUploadFile = (event) => {
        setFileName('Вы загрузили: ' + event.target.files[0].name)
    }

    return (
        <div>
            <Button className='upload_modal_btn btn btn-block shadow-none mb-3 float-end text-capitalize font-normal font-weight-bold' onClick={handleOpen}>Upload New</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className="file-drop-area">
                            <FontAwesomeIcon className='file_upload_icon' icon={faArrowUpFromBracket} />
                            <snap className="file-message">{fileName}</snap>
                            <input className="file-input" type="file" onChange={handleUploadFile}/>
                        </div>
                        <div className="file-send-area">
                            <button className='btn btn-secondary file_upload_btn' type='submit' onClick={handleClose}>Send</button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
