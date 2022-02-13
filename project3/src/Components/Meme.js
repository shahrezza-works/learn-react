import React from 'react'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(resdata => setAllMeme(resdata.data.memes))
        
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    function getMemeImage(event) {
        const memeLength = allMeme.length
        const randomNumber = Math.floor(Math.random()*memeLength)
        const randomData = allMeme[randomNumber]
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
                    <input 
                        type="text" 
                        placeholder='Top text' 
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder='Bottom text'
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage} className='meme--button'>Get a new meme image 🖼</button>
            </div>
            <div className='meme--image--generate'>
                <img className='meme--image' src={meme.randomImage} alt="meme" />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}
