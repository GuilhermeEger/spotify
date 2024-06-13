import { FC } from 'react';
import './BodyItem.css'

type Props = {
    title: string,
    subtitle: string
};
const BodyItem: FC<Props> = ({ title, subtitle }) => {
    return (
        <div className='bi_main'>
            <div className='bi_image' />
            <div className='bi_title'>{title}</div>
            <div className='bi_subTitle'>{subtitle}</div>
        </div>
    )
};
export default BodyItem;