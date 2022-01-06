import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

function CreateNewResume({user}) {

    const navigate = useNavigate()

    const initialState = {
        title: '',
        name: ''
    }

    const [newResumeData, setNewResumeData] = useState(initialState)
    const [image, setImage] = useState(null)

    function handleChangeNewResume (e) {
        setNewResumeData({
            ...newResumeData,
            [e.target.name]: e.target.value
        })
    }

      function handleSubmitNewResume(e) {
        e.preventDefault()
        
        const formData = new FormData();
        formData.append('owner_id', user.id)
        formData.append('title', newResumeData.title)
        formData.append('name', newResumeData.name)
        formData.append('resume_url', image)
        
        fetch('/resumes', {
            method: 'POST',
            body: formData,
        })
        .then(res => {
            if (res.ok) {
                res.json().then((newResume) => {
            console.log(newResume)
            navigate('/resumes')
                })
            }
        })
        
    }

    return (
         <div>
            <form id='new-resume-form' onSubmit={handleSubmitNewResume}>
                <input className='create-new-card' type="text" placeholder='Title' name='title' onChange={handleChangeNewResume} value={newResumeData.title}/>
                <input className='create-new-card' type="text" placeholder='name' name='name' onChange={handleChangeNewResume} value={newResumeData.name}/>
                <input className='create-new-card' type="file" accept='image/*' name='resume_url' onChange={(e) => setImage(e.target.files[0])} />
                <button id='create-new-card-button' type='submit'>Submit</button>
                <br />
                <Link to='/resumes'><button id='create-new-card-button'>Back</button></Link>
            </form>
        </div>
    )
}

export default CreateNewResume
