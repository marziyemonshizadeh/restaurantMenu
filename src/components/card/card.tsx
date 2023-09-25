import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import "./card.css";
const Card: React.FC = () => {
  return (
    <div className="p-5 rounded-2 m-2" style={{ backgroundColor: "#202020" }}>
      <div className="d-flex flex-column text-center">
        <GrInstagram className="icons" />
        <FiPhoneCall className="icons" />
        <FaMapMarkerAlt className="icons" />
        <p>instagram</p>
      </div>
    </div>
  );
};

export default Card;
