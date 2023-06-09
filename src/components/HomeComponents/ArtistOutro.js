import React from 'react';

const artistOutroUrl = 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xOTU3MjAxNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY5NTUxOTc3NH0.gofeCO3QR3ySYd7JHXMzvG60bhM2NdsyDWVdAjzJ7Tc/img.jpg?width=1200&height=600&coordinates=0%2C250%2C0%2C250'

function ArtistOutro () {
    return (
        <div className = 'artist-outro'>
            <h3>
                Okonma's music has been variously considered alternative hip hop, bedroom pop, jazz rap, R&B, and neo soul, while his earlier music was considered horrorcore. 
                Over the years, his style of production has progressed from gritty and dark in early projects such as Goblin, but soon transitioned to a more jazz-based approach, with the album Cherry Bomb, which Okonma described in 2018 as his favorite album. 
                Okonma's fourth album, Flower Boy, "marked the beginning of a new era — a complete departure from the wildly offensive lyrics and dark themes that defined his previous works". 
                Igor, Okonma's first Grammy-winning album, was a deeply personal concept album about "the emotional journey of being the odd man out in a love triangle", 
                while Call Me If You Get Lost, his second Grammy-winning album, was a concept album about "the persona of "Tyler Baudelaire," a suave, well-traveled gentleman with a sophisticated taste for high art"
            </h3>
            <img 
            src = {artistOutroUrl} 
            alt =""
            style={{width:1200,height:600}}
        />
        </div>
    );
}
export default ArtistOutro;