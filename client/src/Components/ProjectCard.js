import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';

function ProjectCard({project, handleDeleteProject, user}) {

    // const [likeCount, setLikeCount] = useState('')
    
    function handleDelete () {
        fetch(`/projects/${project.id}`, {
            method: "Delete"
        })
        .then(res => {
            if (res.ok) {
                handleDeleteProject(project)
            }
        })
    }

    return (
        <Card id='card-container' sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={project.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={project.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {project.description}
                <br />
                {project.language}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                {/* <IconButton aria-label="share"> */}
                    <a href={project.github}>Github</a>
                    <br />
                    <a href={project.livesite}>LiveSite</a>
                {/* </IconButton> */}
            </CardActions>
            {project.owner_id === user.id ? <DeleteIcon onClick={handleDelete}/> : null}
        </Card>
    )
}

export default ProjectCard
