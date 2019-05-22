import React, {useEffect, useState} from 'react'
import vimeo from '../../data'
import {Embed} from '../../components/VideoItem';


const Video = ( props ) => {



return(
    
    <React.Fragment>
        {vimeo.length > 0 ? vimeo.map(id => {
            return(
                    <Embed key={id} id={id} />
            )
        }) : <p>Loading...</p>}
        
    </React.Fragment>

)
}

export default Video