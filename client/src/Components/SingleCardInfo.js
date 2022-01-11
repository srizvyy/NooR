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
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';

function SingleCardInfo({user, project, reviewsData, setDOMUpdater, setUser, handleNewComment, handleDeleteComment}) {
    const [singleProject, setSingleProject] = useState([])
    const id = useParams().id
    
  useEffect(() => {
    fetch(`/projects/${id}`)
    .then(res => res.json())
    .then(data => setSingleProject(data))
  }, [])

    return (
        <div>
            {/* <div> */}
           <Card id='single-card-container' sx={{ maxWidth: 345 }}>
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
                    subheader={singleProject.language}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={singleProject.pic_urls}
                    alt="Project Picture"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {singleProject.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    {/* <FavoriteIcon /> */}
                    </IconButton>
                    {/* <IconButton aria-label="share"> */}
                        <a className='link' target='_blank' href={singleProject.github}>Github</a>
                        <hr />
                        <a className='link' target='_blank' href={singleProject.livesite}>LiveSite</a>
                    {/* </IconButton> */}
                </CardActions>
                {/* {project.owner_id === user.id ? <DeleteIcon onClick={handleDelete}/> : null} */}
            </Card>
            {/* </div> */}
            <div id="comment-container">
               <ReviewForm handleDeleteComment={handleDeleteComment} handleNewComment={handleNewComment} setUser={setUser} setDOMUpdater={setDOMUpdater} reviewsData={reviewsData} project={project} user={user}/>
               <Reviews reviews={project.reviews}/>
            </div>
        </div>
    )
}

export default SingleCardInfo
