"use client"

import { FC, useEffect, useState } from 'react';
import "./LibraryBody.css";
import { StaticImageData } from "next/image"
import Icon from '@/components/atoms/Icon/Icon';
import ButtonIcon from '@/components/atoms/ButtonIcon/ButtonIcon';
import LibraryItem from '@/components/atoms/LibraryItem/LibraryItem';
import linkingPark from '../../../../public/linkinPark.jpg';
import macMiller from '../../../../public/macMiller.png';
import michaelJackson from '../../../../public/michaelJackson.jpg';
import rihanna from '../../../../public/rihanna.jpg';
import podcast from '../../../../public/podcast.jpg';
import linkinPark2 from '../../../../public/linkinPark2.jpg'
import michaelJackson2 from '../../../../public/michaelJackson2.jpg'

type Props = {};

interface LibraryItems {
    tittle: string,
    info: string,
    imgSrc: string | StaticImageData
}

const LibraryBody: FC<Props> = ({ }) => {

    const [libraryItems, setLibraryItems] = useState<LibraryItems[]>([{}]);

    useEffect(() => {
        //get from back
        getItems();
    }, [])

    function getItems() {

        const backEndItems: LibraryItems[] = [
            { tittle: "LinkingPark", info: "Some info here", imgSrc: linkingPark },
            { tittle: "MacMiller", info: "Some info here", imgSrc: macMiller },
            { tittle: "Michael Jackson", info: "Some info here", imgSrc: michaelJackson },
            { tittle: "Rihanna", info: "Some info here", imgSrc: rihanna },
            { tittle: "Podcast", info: "Some info here", imgSrc: podcast },
            { tittle: "LinkinPark", info: "Some info here", imgSrc: linkinPark2 },
            { tittle: "Michael Jackson", info: "Some info here", imgSrc: michaelJackson2 }]

        setLibraryItems(backEndItems);
    }

    return <div className='ml_mainDiv'>
        <div className='ml_header'>
            <Icon name="search" />
            <ButtonIcon iconName='list' label='Recents' />
        </div>
        <div className='ml_itemsBody'>

            {libraryItems.map(item => {
                return <LibraryItem imgSrc={item.imgSrc} tittle={item.tittle} info={item.info} />
            })}

        </div>
    </div>;
};
export default LibraryBody;