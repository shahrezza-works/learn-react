import React from 'react'
import memesData from   '../memesData'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memeLength = allMemeImages.data.memes.length
        const randomNumber = Math.floor(Math.random()*memeLength)
        const randomData = allMemeImages.data.memes[randomNumber]
        const url = randomData.url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main className='meme'>
            <div className='form'>
                <div className='meme--input'>
                    <input type="text" placeholder='Top text' />
                    <input type="text" placeholder='Bottom text'/>
                </div>
                <button onClick={getMemeImage} className='meme--button'>Get a new meme image 🖼</button>
                <img className='meme--image' src={meme.randomImage} alt="meme" />
            </div>
        </main>
    )
}
