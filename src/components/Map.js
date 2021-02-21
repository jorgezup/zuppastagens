import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

const Map = () => {
  return (
    <MapContainer
      center={[-21.7047715, -51.0855125]}
      zoom={13}
      scrollWheelZoom={false}
      touchZoom={false}
      dragging={false}
      style={{ height: '90%', width: '100%' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX}`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />

      <Marker position={[-21.7044483, -51.0854343]} draggable={true} animate={true}>
        <Popup>
          <a href="https://goo.gl/maps/SEDzT7TvXYHeBu5J6" target="_black" rel="noopener noreferrer">
            Zup Pastagens
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
