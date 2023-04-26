import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material"
import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange, Padding } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { useState } from "react";
import styled from "@emotion/styled";
import avatarImg from '../../assets/images/avatar.jpg';

const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 290,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    padding: '20px'
};

const greyColor = grey[600];

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})



function Add() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Tooltip onClick={handleOpen} title="Add" sx={{position: 'fixed', bottom: '25px', left: {xs: 'calc(50% - 25px)', md: '30px'}}} >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{padding: '20px'}}
                >
                <Box sx={styleBox} color={"text.primary"} >
                    <Typography variant="h6" fontWeight={400} textAlign='center'>Create Post</Typography>
                    <UserBox>
                        <Avatar alt="Remy Sharp" sx={{width: '40px', height: '40px'}} src={avatarImg}  />
                        <Typography variant="span" color={greyColor}>Ahmed Salah</Typography>
                    </UserBox>
                    <TextField
                        sx={{
                            width: '100%',
                        }}
                        
                        id="standard-multiline-flexible"
                        label= "What's on your mind?"
                        multiline
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width: '100px'}}><DateRange /></Button>
                        
                    </ButtonGroup>
                </Box>
            </Modal>
        </>
    )
}

export default Add;