import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function SingleCardInfo() {
    const [singleProject, setSingleProject] = useState([])
    const id = useParams().id
    
  useEffect(() => {
    fetch(`/projects/${id}`)
    .then(res => res.json())
    .then(data => setSingleProject(data))
  }, [])
    return (
        <div>
           <Card id='card-container' sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                    </IconButton>
                    }
                    title={singleProject.title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={singleProject.image}
                    alt="Project Picture"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {singleProject.description}
                    <br />
                    {singleProject.language}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    {/* <FavoriteIcon /> */}
                    </IconButton>
                    {/* <IconButton aria-label="share"> */}
                        <a href={singleProject.github}>Github</a>
                        <hr />
                        <a href={singleProject.livesite}>LiveSite</a>
                    {/* </IconButton> */}
                </CardActions>
                {/* {project.owner_id === user.id ? <DeleteIcon onClick={handleDelete}/> : null} */}
            </Card>
        </div>
    )
}

export default SingleCardInfo
