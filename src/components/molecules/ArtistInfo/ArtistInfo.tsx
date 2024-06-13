import { FC } from 'react';
import './ArtistInfo.css'
import ButtonIcon from '@/components/atoms/ButtonIcon/ButtonIcon';

type Props = {};
const ArtistInfo: FC<Props> = ({ }) => {
    return (
        <div className='ai_mainWraper'>
            <div className='ai_header'>
                <div>Credits</div>
                <div>Show All</div>
            </div>
            <div className='ai_content'>
                <div>
                    <div className='ai_artistName'>Artist</div>
                    <div>info</div>
                </div>
                <ButtonIcon label="Follow" />
            </div>
        </div>
    );
};
export default ArtistInfo;