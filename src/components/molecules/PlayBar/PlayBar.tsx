import { FC } from 'react';
import "./PlayBar.css";
import LittleMusicPlayer from '@/components/atoms/LittleMusicPlayer/LittleMusicPlayer';
import Image from 'next/image';
import img from '../../../../public/macMiller.png'
import Icon from '@/components/atoms/Icon/Icon';

type Props = {};
const PlayBar: FC<Props> = ({ }) => {
    return (
        <div className='playBar'>
            <div className='pb_musicInfo'>
                <Image
                    className='pb_image'
                    src={img}
                    alt="Playing music" />
                <div>
                    <div className='pb_playinMusicName'>Circles</div>
                    <div className='pb_playinMusicArtist'>Mac Miller</div>
                </div>
            </div>
            <div className='pb_playBar'>
                <div className='pb_iconWrap'>
                    <Icon className="shuffleButton" name="shuffle" />
                    <Icon className="playerPrevButton" name="playerPrev" />
                    <Icon className='pb_playButton' name="playFilled" />
                    <Icon className="playerNextButton" name="playerNext" />
                    <Icon className="repeatButton" name="repeat" />
                </div>
                <div className='pb_soundBar'>
                    <div>3:10</div>
                    <div className='pb_songDurationBar'>
                        <div className='pb_songBar' style={{ width: `${(310 / 520) * 100}%` }}></div>
                    </div>
                    <div>5:20</div>
                </div>
            </div>
            <div className='pb_actions'>
                <Icon name="volume" />
                <div className='pb_volumeBar'>
                    <div className='pb_volume' style={{ width: `${(20 / 100) * 100}%` }}></div>
                </div>
            </div>
        </div>
    )

};
export default PlayBar;