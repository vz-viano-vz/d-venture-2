import 'leaflet/dist/leaflet.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer } from 'react-leaflet'

function Map() {
    return ( 
        <MapContainer style={{width: '100%', height:'40rem'}} center={[-7.9778384,110.3672257]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="http://127.0.0.1:8000/tiles/{z}/{x}/{y}.png"
            />
        </MapContainer>
     );
}

export default Map;