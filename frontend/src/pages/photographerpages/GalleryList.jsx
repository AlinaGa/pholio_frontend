import React from 'react';
import Gallery from '../../components/photographer/Gallery';
import CreateGallery from '../../components/photographer/CreateGallery';
import Topbar from '../../components/photographer/Topbar';
import Sidebar from '../../components/photographer/Sidebar'
import InfoBox from '../../components/client/Infobox';
import ImageCard from '../../components/photographer/ImageCard';
import '../../components/photographer/photographer.css';



const ClientList = () => {
    return (
        <>
            <div className='adminpage'>
                <Sidebar />

                <div className='main'>

                    <div className='topbar'>
                        <Topbar />
                    </div>
                    <div className='content'>
                        <CreateGallery />
                        <Gallery />
                        <Gallery />
                        <Gallery />
                        <Gallery />
                        <Gallery />
                        <Gallery />
                        <Gallery />


                    </div>
                </div>
            </div>
        </>


    );
}

export default ClientList;