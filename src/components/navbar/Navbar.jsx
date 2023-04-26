
import { styled, AppBar, Toolbar, Typography, InputBase, Avatar, MenuItem, Menu, ListItemIcon, Divider } from "@mui/material";
import { Pets, Mail, Notifications, PersonAdd, Settings, Logout } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import avatarImg from '../../assets/images/avatar.jpg';
import { useState } from "react";


const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
});

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const Icons = styled('Box')(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')] : {
        display: 'flex'
    }
}))

const UserBox = styled('Box')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

function Navbar() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <AppBar position="sticky" >
            <StyledToolBar>
                <Typography variant="h6" color="inherit" sx={{display: {xs: 'none', sm: 'block'}}}>A.s</Typography>
                <Pets sx={{display: {xs: 'block', sm: 'none'}}}/>
                <Search color={"text.primary"}>
                    <InputBase placeholder="Search..."  sx={{width: '100%'}}/>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail color="inhert" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications color="inhert" />
                    </Badge>
                    <Avatar alt="Remy Sharp" sx={{width: '30px', height: '30px'}} src={avatarImg} />
                </Icons>
                <UserBox>
                    <Typography variant="span" color="inhert">Ahmed Salah</Typography>
                    <Avatar alt="Remy Sharp" sx={{width: '30px', height: '30px'}} src={avatarImg}  onClick={handleClick} />
                    
                </UserBox>
            </StyledToolBar>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
                </MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar;