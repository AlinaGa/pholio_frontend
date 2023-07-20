import React from 'react';
import Album from '../../components/client/album';
import ClientNavbar from '../../components/client/ClientNavbar';
import '../../components/client/client.css';
import InfoBox from '../../components/client/Infobox';

const AlbumList = () => {
    return (<>
        <ClientNavbar />
        <div className='albumlist'>
            <section className='albumheadingsection'>
                <h1 className='yourgalleries'>Your Galleries</h1>
            </section>

            <hr className='hr' />
            
            <div className='albums'>

                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
                
            </div >
        </div>
        {/* <InfoBox /> */}
    </>
    );
}

export default AlbumList;