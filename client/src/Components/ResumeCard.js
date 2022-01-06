import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ResumeCard({resume, user, handleDeleteResume}) {

     function handleDelete () {
        fetch(`/resumes/${resume.id}`, {
            method: "Delete"
        })
        .then(res => {
            if (res.ok) {
                handleDeleteResume(resume)
            }
        })
    }


    return (
        <div id='resume-card'>
             <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={resume.resume_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {resume.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {<p>Created by: {resume.name}</p>}
          </Typography>
        </CardContent>
      </CardActionArea>
      {resume.owner_id === user.id ? <DeleteIcon id='delete-icon' onClick={handleDelete}/> : null}
    </Card>
        </div>
    )
}

export default ResumeCard
