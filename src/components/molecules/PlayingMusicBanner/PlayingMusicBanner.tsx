import { FC } from 'react';
import './PlayingMusicBanner.css'
import Image from 'next/image';
import img from '../../../../public/macMiller.png';

type Props = {};
const PlayingMusicBanner: FC<Props> = ({ }) => {
    return (
        <div className='pmb_main'>
            <Image
                alt="Playing music"
                src={img}
                className='pmb_image' />
            <h2 className='pmb_title'>Music Playing</h2>
            <div className='pmb_artist'>Artist</div>
        </div>
    )
};
export default PlayingMusicBanner;