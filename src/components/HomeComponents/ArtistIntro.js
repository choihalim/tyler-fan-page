import React from 'react';

const artistIntroUrl = 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-217546-h_14330705.jpg?w=1581&h=1054&crop=1'

function ArtistIntro () {
    return (
    <div className = 'artist-intro'>
        <h3>Tyler the Creator is someone that truly lives up to his name. Unlike a lot of his counterparts, he is more than just a rapper, he is a singer, songwriter, producer, deisgner, video director, actor and so much more. 
            This was not always the case though and his current status of being a highly intelligent and creative rapper has only fairly recently been achieved. 
            Lets go on a bit of a journey to find out how this wild goofball of an artist went from being an odd yet talented lyriscist to a two time grammy winner for his latest albums. 
        </h3>
        <img 
            src = {artistIntroUrl} 
            alt =""
            style={{width:800,height:600}}
        />
    </div>
    );
}
export default ArtistIntro;