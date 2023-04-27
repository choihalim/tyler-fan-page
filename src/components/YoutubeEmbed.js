import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedID }) => (
    <div>
        <iframe
            width="800"
            height="500"
            src={`https://www.youtube.com/embed/${embedID}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded Youtube Video"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedID: PropTypes.string.isRequired
};

export default YoutubeEmbed;