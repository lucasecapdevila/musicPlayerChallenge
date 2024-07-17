import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


const CardArtista = ({}) => {
  return (
    <div className="bg-white h-48 w-48 m-2 relative group rounded-sm">
      <h2 className="text-center font-semibold text-lg">Soda Stereo</h2>
      <p className="h-14 w-14 rounded-full bg-green-600 absolute bottom-2 right-2 flex items-center justify-center" >
        <FontAwesomeIcon icon={faPlay} size="2x" color="white" />
      </p>

      {/* <audio controls>
        <source src={preview} type="audio/ogg"/>
        Your browser does not support the audio element.
      </audio> */}
    </div>
  );
};

export default CardArtista;
