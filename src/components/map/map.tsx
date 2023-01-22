import { Icon, LayerGroup, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/use-map';
import { BookingQuestInfo, Coords, Location } from '../../types/booking';

const VIEW_ZOOM = 10;
const COMPANY_COORDS: Coords = [59.96831, 30.31749];

type MapProps = {
  quest?: BookingQuestInfo;
  selectedLocation?: Location;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [23, 42],
  iconAnchor: [11.5, 42]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [23, 42],
  iconAnchor: [11.5, 42]
});

function Map({quest, selectedLocation}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, COMPANY_COORDS);

  useEffect(() => {
    map?.setView(COMPANY_COORDS, VIEW_ZOOM);
  }, [map]);

  const layer = new LayerGroup();

  useEffect(() => {
    if (map) {
      if (!quest) {
        const [lat, lng] = COMPANY_COORDS;
        const marker = new Marker({
          lat,
          lng
        });

        marker.setIcon(defaultCustomIcon);
        layer.addLayer(marker);
        layer.addTo(map);
      } else {
        quest.locations.forEach((location) => {
          const [lat, lng] = location.coords;
          const marker = new Marker({
            lat,
            lng
          });

          marker
            .setIcon(
              selectedLocation && location.id === selectedLocation.id
                ? currentCustomIcon
                : defaultCustomIcon
            );
          layer.addLayer(marker);
        });

        layer.addTo(map);
      }
    }
    return () => {layer.clearLayers();};
  });

  return (
    <div
      className="map__container"
      ref={mapRef}
    />
  );
}

export default Map;
