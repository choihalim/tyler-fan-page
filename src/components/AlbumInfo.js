import React, {useState} from "react";

function AlbumInfo({ albumSongs }) {
    console.log(albumSongs);
    
    const [favorite, setFavorite] = useState (true)

    function toggleHeart(){
        setFavorite(!favorite)
    }

    return (
        <>
            <ul>
                {albumSongs.map((song, index) => <li key={index}>{song} {favorite ? <i onClick = {toggleHeart} class="fa-regular fa-heart" style={{color: "#000000"}}></i> : <i onClick = {toggleHeart} class="fa-solid fa-heart" style={{color: "#000000"}}></i>} </li>)}
                
            </ul>
        </>
    );
}

export default AlbumInfo;
