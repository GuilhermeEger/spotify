import { MdHomeFilled } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { MdOutlineList } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";



type IconMap = {
    [key: string]: React.ReactElement;
};

const iconMap: IconMap = {
    home: <MdHomeFilled />,
    search: <MdSearch />,
    library: <MdLibraryMusic />,
    add: <MdAdd />,
    forwardArrow: <MdArrowForward />,
    list: <MdOutlineList />,
    backArrowIos: <MdArrowBackIos />,
    forwardArrowIos: <MdArrowForwardIos />,
    notifications: <MdNotifications />,
    groups: <MdGroups />,
    person: <MdOutlinePerson />,
    close: <MdClose />,
    moreHorizontal: <MdMoreHoriz />
}

export default iconMap;