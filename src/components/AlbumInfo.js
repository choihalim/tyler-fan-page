import React from "react";

function AlbumInfo({ albumSongs }) {
    console.log(albumSongs);
    return (
        <>
            <ul>
                {albumSongs.map((song, index) => <li key={index}>{song}</li>)}
            </ul>
        </>
    );
}

export default AlbumInfo;