import React from "react";

function AlbumInfo({ albumSongs }) {
    console.log(albumSongs);
    return (
        <>
            <ul>
                {albumSongs.map((song, index) => <li key={index}>{song} <i class="fa-regular fa-heart" style={{color: "#000000"}}></i></li>)}
                
            </ul>
        </>
    );
}

export default AlbumInfo;

//<i class="fa-solid fa-heart" style={{color: "#000000"}}