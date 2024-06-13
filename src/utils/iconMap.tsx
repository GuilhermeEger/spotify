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
import { MdMusicNote } from "react-icons/md";
import { MdOutlineShuffle } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { MdRepeat } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";


type IconMap = {
    [key: string]: React.ReactElement;
};

const iconMap: IconMap = {
    volume: <MdVolumeUp />,
    repeat: <MdRepeat />,
    playFilled: <MdOutlinePlayCircleFilled />,
    playerNext: <MdSkipNext />,
    playerPrev: <MdSkipPrevious />,
    shuffle: <MdOutlineShuffle />,
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
    moreHorizontal: <MdMoreHoriz />,
    musicNote: <MdMusicNote />
}

export default iconMap;