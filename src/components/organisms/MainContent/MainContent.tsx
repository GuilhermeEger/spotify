"use client"

import Icon from '@/components/atoms/Icon/Icon';
import { FC, useEffect, useState } from 'react';
import './MainContent.css';
import Image from 'next/image';
import music1 from '../../../../public/music1.jpg';
import BodyItem from '@/components/molecules/BodyItem/BodyItem';
import { useSearchParams } from 'next/navigation';

interface bodyItems {
    title: string,
    subtitle: string
}

type Props = {};
const MainContent: FC<Props> = ({ }) => {

    const [BodyItems, setBodyItems] = useState<bodyItems[]>();

    useEffect(() => {

        getBodyItems();

    }, [])

    function getBodyItems() {

        const bodyItems: bodyItems[] = [
            {
                title: "Mixtape 1",
                subtitle: "to relax lintening"
            }, {
                title: "Mixtape 2",
                subtitle: "Mixtape for run"
            }, {
                title: "Mixtape 3",
                subtitle: "Australian best musics"
            }, {
                title: "Mixtape 4",
                subtitle: "Musics to relax"
            },]

        setBodyItems(bodyItems);

    }

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
                <h1 className='mc_bodyContentTittle'>Lofi</h1>
                <div className='mc_body'>
                    <div className='mc_bodyHeader'>
                        <div>Essencials</div>
                        <div>Show All</div>
                    </div>
                    <div className='mc_bodyItemsMap'>
                        {BodyItems?.map(item => {
                            return (
                                <BodyItem title={item.title} subtitle={item.subtitle} />
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    </>;
};
export default MainContent;