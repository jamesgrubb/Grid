import React, {useEffect, useState} from 'react'
import {VideoGallery} from "../../components/VideoGallery"
import vimeo from '../../data'
import {Embed} from '../../components/VideoItem';


const Video = ( props ) => {



return(
    
    <React.Fragment>
        <VideoGallery>  
        {vimeo.length > 0 ? vimeo.map(id => {
            return(
                    <Embed key={id} id={id} />
            )
        }) : <p>Loading...</p>}
        </VideoGallery>
    </React.Fragment>

)
}

export default Video