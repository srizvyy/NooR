import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function CreateNewForm({user}) {
    
    const navigate = useNavigate()

    const initialState = {
        title: '',
        description: '',
        language: '',
        github: '',
        livesite: ''
    }

    const [newCardData, setNewCardData] = useState(initialState)
    const [image, setImage] = useState(null)
    
    function handleChangeNewCard (e) {
        setNewCardData({
            ...newCardData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmitNewCard(e) {
        e.preventDefault()
        
        const formData = new FormData();
        formData.append('owner_id', user.id)
        formData.append('title', newCardData.title)
        formData.append('description', newCardData.description)
        formData.append('language', newCardData.language)
        formData.append('github', newCardData.github)
        formData.append('livesite', newCardData.livesite)
        formData.append('pic_urls', image)
        
        fetch('/projects', {
            method: 'POST',
            body: formData,
        })
        .then(res => {
            if (res.ok) {
                res.json().then((newCard) => {
            console.log(newCard)
            navigate('/projects')
                })
            }
        })
        
    }

    return (
        <div>
            <h2 className='new-form'>Add New Project</h2>
            <form id='project-form' onSubmit={handleSubmitNewCard}>
                <input className='create-new-card' type="text" placeholder='Title' name='title' onChange={handleChangeNewCard} value={newCardData.title}/>
                <input className='create-new-card' type="file" accept='image/*' name='pic_urls' onChange={(e) => setImage(e.target.files[0])} />
                <textarea id='text-area' className='create-new-card' type="text" placeholder='Description' name='description' onChange={handleChangeNewCard} value={newCardData.description}/>
                <input className='create-new-card' type="text" placeholder='Language' name='language' onChange={handleChangeNewCard} value={newCardData.language}/>
                <input className='create-new-card' type="text" placeholder='GitHub link' name='github' onChange={handleChangeNewCard} value={newCardData.github}/>
                <input className='create-new-card' type="text" placeholder='LiveSite link' name='livesite' onChange={handleChangeNewCard} value={newCardData.livesite}/>
                <button id='create-new-card-button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateNewForm
