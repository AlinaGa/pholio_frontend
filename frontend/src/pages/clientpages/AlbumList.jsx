import React from 'react';
import Album from '../../components/client/album';
import '../../components/client/client.css';
import InfoBox from '../../components/client/Infobox';

const AlbumList = () => {
    return (<>
        {/* <Navbar /> */}
        <div className='albumlist'>
            <section className='albumheadingsection'>
                <h1 className='yourgalleries'>Your Galleries</h1>
            </section>
            <div className='albums'>

                <Album />
                <Album />
                <Album />
            </div >
        </div>
        <InfoBox />
    </>
    );
}

export default AlbumList;