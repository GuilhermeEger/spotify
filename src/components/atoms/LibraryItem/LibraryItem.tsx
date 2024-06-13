import { FC } from 'react';
import "./LibraryItem.css"
import Image from 'next/image';
import { StaticImageData } from "next/image"

type Props = {
    tittle: string,
    info: string,
    imgSrc: string | StaticImageData
};
const LibraryItem: FC<Props> = ({ tittle, info, imgSrc }) => {
    return <div className='li_main'>
        <Image
            className='li_image'
            src={imgSrc}
            width={500}
            height={500}
            alt="Picture of the author" />
        <div className='li_labelWrap'>
            <div className='li_title'>{tittle}</div>
            <div className='li_info'>{info}</div>
        </div>

    </div>;
};
export default LibraryItem;