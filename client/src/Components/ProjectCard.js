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
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import UpdateCard from './UpdateCard';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function ProjectCard({project, handleDeleteProject, user, reviewsData}) {

    const [likeCount, setLikeCount] = useState(project.reviews.map((review)=>review.like))
    // console.log(project.reviews.map((review)=> review.like))

      function handleLike(e) {
        fetch(`/reviews/${project.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({
            // like: !project.reviews.like
            user: user.id,
            like: e.target.value
            }),
        }).then((r) => {
            if (r.ok) {
            r.json()
                .then(setLikeCount((like)=> ++like))
            }
        });
        
    }
  
    
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
        
       <Link to={"/projects/" + project.id}> 
            <Card id='card-container' sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        {/* <ThumbUpIcon onClick={handleLike} id={setLikeCount ?  'like-color' : null}></ThumbUpIcon> */}
                        <Button onClick={handleLike}>👍 {likeCount}</Button>
                        {/* {likeCount} */}
                        {/* <button>{project.reviews.like}</button> */}
                    </IconButton>
                    }
                    title={project.title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={project.image}
                    alt="Project Picture"
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
                    {/* <FavoriteIcon /> */}
                    </IconButton>
                    {/* <IconButton aria-label="share"> */}
                        <a href={project.github}>Github</a>
                        <hr />
                        <a href={project.livesite}>LiveSite</a>
                    {/* </IconButton> */}
                </CardActions>
                {project.owner_id === user.id ? <DeleteIcon onClick={handleDelete}/> : null}
            </Card>
        </Link>
    
            
    )
}

export default ProjectCard
