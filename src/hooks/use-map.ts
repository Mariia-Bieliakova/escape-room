import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Coords } from '../types/booking';

const LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  location: Coords)
  : Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location[0],
          lng: location[1]
        },
        zoom: 10
      });

      const layer = new TileLayer(
        LAYER,
        { attribution: ATTRIBUTE }
      );

      instance.addLayer(layer);

      setMap(instance);

      isRenderedRef.current = true;
    }
  },[mapRef, map, location]);

  return map;
}

export default useMap;

// const ZOOM = 8;
// const LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
// const ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

// function useMap (
//   mapRef: MutableRefObject<HTMLElement | null>,
//   location: Coords
// )
// : Map | null {
//   const [map, setMap] = useState<Map | null>(null);
//   const isRenderedRef = useRef<boolean>(false);

//   useEffect(() => {
//     if(mapRef.current !== null && !isRenderedRef.current) {
//       const instance = new Map(mapRef.current, {
//         center: location,
//         zoom: ZOOM
//       });

//       const layer = new TileLayer(
//         LAYER,
//         { attribution: ATTRIBUTE }
//       );

//       instance.addLayer(layer);

//       setMap(instance);

//       isRenderedRef.current = true;
//     }
//   }, [map, mapRef, location]);

//   return map;
// }

// export default useMap;
