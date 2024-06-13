import { FC } from 'react';
import "./PlayBar.css";
import LittleMusicPlayer from '@/components/atoms/LittleMusicPlayer/LittleMusicPlayer';

type Props = {};
const PlayBar: FC<Props> = ({ }) => {
    return (
        <div className='playBar'>
            <div className='pb_musicInfo'>

            </div>
            <div className='pb_playBar'>

            </div>
            <div className='pb_actions'>
            </div>
        </div>
    )

};
export default PlayBar;