import { FC } from 'react';
import './LittleMusicPlayer.css'
import Icon from '../Icon/Icon';

type Props = {};
const LittleMusicPlayer: FC<Props> = ({ }) => {
    return (
        <div className='lmp_mainWraper'>
            <Icon name='musicNote' />
            <div className='lmp_musicImage' />
            <div className='lmp_musicInfo'>
                <div className='lmp_musicTitle'>Music Title</div>
                <div className='lmp_artistName'>artist name</div>
            </div>
        </div>
    );
};
export default LittleMusicPlayer;