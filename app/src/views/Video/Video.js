import React, { useEffect, useState } from "react";
import { VideoGallery } from "../../components/VideoGallery";
import { vimeo } from "../../data";
import { Embed } from "../../components/VideoItem";
import ResponsiveEmbed from "react-responsive-embed";

const Video = props => {
  return (
    <React.Fragment>
      <VideoGallery>
        {vimeo.length > 0 ? (
          vimeo.map(id => {
            return (
              <ResponsiveEmbed
                src={`https://player.vimeo.com/video/${id}?autoplay=1&loop=1&autopause=0`}
                ratio="1:1"
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </VideoGallery>
    </React.Fragment>
  );
};

export default Video;
