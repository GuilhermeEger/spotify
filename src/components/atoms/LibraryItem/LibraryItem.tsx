import { FC } from 'react';
import "./LibraryItem.css"

type Props = {
    tittle: string,
    info: string
};
const LibraryItem: FC<Props> = ({ tittle, info }) => {
    return <div className='li_main'>
        <div className='li_image'>

        </div>
        <div className='li_labelWrap'>
            <div className='li_title'>{tittle}</div>
            <div className='li_info'>{info}</div>
        </div>

    </div>;
};
export default LibraryItem;