import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch,  } from "@mui/material";
import { Home, Article, Group, Storefront, Person, Settings, AccountBox, Brightness2 } from '@mui/icons-material';


function Sidebar({mode, setMode}) {

    return (
        <Box flexGrow={0.5} p={5} sx={{display: {xs: 'none', sm: 'block', position: 'fixed', left: '0', height: '100%'}}} >
            <List sx={{height: '100%', position: 'relative'}}>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <Article />
                    </ListItemIcon>
                    <ListItemText primary="Article" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <Group />
                    </ListItemIcon>
                    <ListItemText primary="Group" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <Storefront />
                    </ListItemIcon>
                    <ListItemText primary="Storefront" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Person" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <AccountBox />
                    </ListItemIcon>
                    <ListItemText primary="Account" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <Brightness2 />
                    </ListItemIcon>
                    <Switch onChange={ _ => setMode( mode === 'light'? 'dark' : 'light' ) }/>
                    </ListItemButton>
                </ListItem>

                

                

          </List>
        </Box>
    )
}

export default Sidebar;