import React from "react";

function AlbumInfo({ albumSongs }) {
    return (
        <>
            <h2>{albumSongs.length === 0 ? null : "Tracklist"}</h2>
            <ul>
                {albumSongs.map((song, index) => <li key={index}>{song}</li>)}
            </ul>
        </>
    );
}

export default AlbumInfo;
