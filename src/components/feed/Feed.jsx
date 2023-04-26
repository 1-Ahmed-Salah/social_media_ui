import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import imageCade1 from '../../assets/images/milad-fakurian-x-u3agH4bbY-unsplash.jpg';
import imageCade2 from '../../assets/images/yaniv-cohen-rWG0AZhpp7s-unsplash.jpg';

function Feed() {
    return (
        <Box flexGrow={5} p={5} sx={{ display: 'flex', flexDirection: 'column', gap: '30px'}} >
            <Card sx={{ maxWidth: 560, mx: 'auto' }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        A
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2023"
                />
                <CardMedia
                    component="img"
                    sx={{height: '400px'}}
                    image={imageCade1}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}}/>} />
                    </IconButton>
                    <IconButton aria-label="share">
                    <Share/>
                    </IconButton>
                    
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 560, mx: 'auto' }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2023"
                />
                <CardMedia
                    component="img"
                    sx={{height: '400px'}}
                    image={imageCade2}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}}/>} />
                    </IconButton>
                    <IconButton aria-label="share">
                    <Share/>
                    </IconButton>
                    
                </CardActions>
            </Card>
        </Box>
    )
}

export default Feed;