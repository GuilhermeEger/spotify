import { FC } from 'react';
import './BodyItem.css'
import { StaticImageData } from "next/image"
import Image from 'next/image';

type Props = {
    title: string,
    subtitle: string,
    imgSrc: string | StaticImageData
};
const BodyItem: FC<Props> = ({ title, subtitle, imgSrc }) => {
    return (
        <div className='bi_main'>
            <Image
                className='bi_image'
                src={imgSrc}
                alt="Picture of the author" />
            <div>
                <div className='bi_title'>{title}</div>
                <div className='bi_subTitle'>{subtitle}</div>
            </div>
        </div>
    )
};
export default BodyItem;