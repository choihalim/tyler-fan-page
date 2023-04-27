import React from 'react';

const earlyYearsImageUrl = 'https://i.redd.it/962iylmrszk51.png'

function ArtistEarlyYears () {
    return (
        <div className = 'artist-early-years'>
            <h3>Tyler Gregory Okonma was born on March 6, 1991, in Hawthorne, California, the son of a Nigerian father with Igbo ancestry and an American mother of mixed African-American and white Canadian descent. 
                Unfortunately he never knew or met his father but that gave him a longing and a desire to achieve greatness and fill that void. 
                At the early age of 7 he found the second love of his life and the one thing that would keep him going over the years, music. 
                This led him to start taking CDs from his mom's collection and replace the album art with his own that he had drawn, which funnily enough would become a passion of his later in life. 
                Falling in love with rap at an early age, he listened to big names like: Q-Tip, André 3000, Chad Hugo, Kanye West, Missy Elliot, Busta Rhymes and Hype Williams. 
                This set him on a course to becoming one of the most debatably influential rappers of the 2010s. 
                His love for music deepened at the age of 12 as his grandmother deemed him old enough to listen to more 'mature' music introducing him to artists like: Blackeyed Peas, Outkast, Biggie Smalls and Eminem to name a few. 
                For the next two years Tyler would beg his mother and grandmother for keyboard so he could start learning to play and write music. 
                He did not spend those two years sitting by idly however and this is where the story of Tyler the Creator actually starts; 
                for at 12 he made his first MySpace page dubbed Ace The Creator where he delved deep into the world of creating playlists. 
                At 14 years old he would finally be gifted his precious keyboard, which he then proceeded take to his room, lock the door, and spend the entire summer trying to teach himself to read, write and play music, unsuccessfully so. 
                It would take him several years and many friends to finally be at a point where he could read and write music, this is where his first group Odd Future would come in.
            </h3>
            <img 
            src = {earlyYearsImageUrl} 
            alt =""
            style={{width:800,height:400}}

            />
        </div>
    );
}
export default ArtistEarlyYears;