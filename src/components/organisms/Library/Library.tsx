import Icon from '@/components/atoms/Icon/Icon';
import { FC } from 'react';
import "./Library.css"

type Props = {};
const Library: FC<Props> = ({ }) => {
    return <>
        <div className='libraryHead'>
            <Icon name="library" />
            <div>Library</div>
            <Icon name="add" />
            <Icon name="forwardArrow" />
        </div>
    </>;
};
export default Library;