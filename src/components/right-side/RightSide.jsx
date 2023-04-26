import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";


function RightSide() {
    return (
        <Box flexGrow={0.5} p={5}   sx={{display: {xs: 'none', sm: 'block', position: 'fixed', right: 0}}} >
            <Box width={300}>
                <Typography variant="h6" fontWeight={400} >Online Friends</Typography>
                <AvatarGroup max={7} sx={{ mt: 2 }}>
                    <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://mui.com//static/images/avatar/3.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/5.jpg" />
                    <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://mui.com//static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={400}  sx={{mt: 4}}>Latest Photos</Typography>
                <ImageList sx={{ width: 300, height: 210, mt: 2 }} cols={3} rowHeight={100} gap={5}>
                    <ImageListItem >
                        <img
                            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
                            loading="lazy"
                            alt="test"
                            sx={{width: '100%', height: '100%'}}
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
                            loading="lazy"
                            alt="test"
                            sx={{width: '100%', height: '100%'}}
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
                            loading="lazy"
                            alt="test"
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
                            loading="lazy"
                            alt="test"
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src='https://images.unsplash.com/photo-1533827432537-70133748f5c8'
                            loading="lazy"
                            alt="test"
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'
                            loading="lazy"
                            alt="test"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={400} sx={{mt: 4}}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://mui.com//static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default RightSide;