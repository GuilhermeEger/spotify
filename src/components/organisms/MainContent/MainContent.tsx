import Icon from '@/components/atoms/Icon/Icon';
import { FC } from 'react';
import './MainContent.css';
import Image from 'next/image';
import music1 from '../../../../public/music1.jpg';

type Props = {};
const MainContent: FC<Props> = ({ }) => {
    return <>
        <div className='mc_header'>
            <div className='mc_headerArrows'>
                <Icon name="backArrowIos" />
                <Icon name="forwardArrowIos" />
            </div>
            <div className='mc_actions'>
                <Icon className="mc_actionIcon" name="notifications" />
                <Icon className="mc_actionIcon" name="groups" />
                <Icon className="mc_actionIcon" name="person" />
            </div>
        </div>
        <div className='mc_image'>
            <Image
                src={music1}
                sizes='100vw'
                style={{
                    width: "100%",
                    height: "auto"
                }}
                alt="Picture of the author"
            />
        </div>
        <div className='mc_mainWrap'>
            <div className='mc_bodyContent'>
                <h1>Lofi</h1>
                <div className='mc_body'>

                </div>
            </div>
        </div>
    </>;
};
export default MainContent;