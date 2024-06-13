import Icon from '@/components/atoms/Icon/Icon';
import { FC } from 'react';
import "./Infos.css"
import PlayingMusicBanner from '@/components/molecules/PlayingMusicBanner/PlayingMusicBanner';
import ArtistInfo from '@/components/molecules/ArtistInfo/ArtistInfo';
import MusicQueue from '@/components/molecules/MusicQueue/MusicQueue';
import LittleMusicPlayer from '@/components/atoms/LittleMusicPlayer/LittleMusicPlayer';

type Props = {};
const Infos: FC<Props> = ({ }) => {
  return <>
    <div className='infoHeader'>
      <div>Title</div>
      <div className='infoHeaderActions'>
        <Icon name="moreHorizontal" />
        <Icon name="close" />
      </div>
    </div>
    <div>
      <PlayingMusicBanner />
      <ArtistInfo />
      <MusicQueue />
      <LittleMusicPlayer />
    </div>
  </>;
};
export default Infos;