import { FC } from 'react';
import './PlayingMusicBanner.css'

type Props = {};
const PlayingMusicBanner: FC<Props> = ({ }) => {
    return (
        <div className='pmb_main'>
            <div className='pmb_image' />
            <h2 className='pmb_title'>Music Playing</h2>
            <div className='pmb_artist'>Artist</div>
        </div>
    )
};
export default PlayingMusicBanner;