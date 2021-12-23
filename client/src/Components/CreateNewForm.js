import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function CreateNewForm({handleNewCard, user}) {

    const navigate = useNavigate()

    const initialState = {
        title: '',
        image: '',
        description: '',
        language: '',
        github: '',
        livesite: ''
    }

    const [newCardData, setNewCardData] = useState(initialState)

    function handleChangeNewCard (e) {
        setNewCardData({
            ...newCardData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmitNewCard(e) {
        e.preventDefault()
        fetch('/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                owner_id: user.id,
                title: newCardData.title,
                image: newCardData.image,
                description: newCardData.description,
                language: newCardData.language,
                github: newCardData.github,
                livesite: newCardData.livesite
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then((newCard) => {
            setNewCardData(initialState)
            handleNewCard(newCard)
            navigate('/projects')
                })
            }
        })
        
    }

    return (
        <div>
            <form onSubmit={handleSubmitNewCard}>
                <input type="text" placeholder='Title' name='title' onChange={handleChangeNewCard} value={newCardData.title}/>
                <input type="text" placeholder='Image URL' name='image' onChange={handleChangeNewCard} value={newCardData.image}/>
                <input type="text" placeholder='Description' name='description' onChange={handleChangeNewCard} value={newCardData.description}/>
                <input type="text" placeholder='Language' name='language' onChange={handleChangeNewCard} value={newCardData.language}/>
                <input type="text" placeholder='GitHub link' name='github' onChange={handleChangeNewCard} value={newCardData.github}/>
                <input type="text" placeholder='LiveSite link' name='livesite' onChange={handleChangeNewCard} value={newCardData.livesite}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateNewForm
