import { PiHouseBold } from "react-icons/pi";
import { PiMagnifyingGlassBold } from "react-icons/pi";


type IconMap = {
    [key: string]: React.ReactElement;
};

const iconMap: IconMap = {
    home: <PiHouseBold />,
    search: <PiMagnifyingGlassBold />
}

export default iconMap;