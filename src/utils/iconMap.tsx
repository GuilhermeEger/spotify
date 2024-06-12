import { MdHomeFilled } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";


type IconMap = {
    [key: string]: React.ReactElement;
};

const iconMap: IconMap = {
    home: <MdHomeFilled />,
    search: <MdSearch />,
    library: <MdLibraryMusic />,
    add: <MdAdd />,
    forwardArrow: <MdArrowForward />
}

export default iconMap;