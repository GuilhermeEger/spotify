"use client"

import Icon from '@/components/atoms/Icon/Icon';
import { FC, useState } from 'react';
import "./Library.css";
import LibraryBody from '@/components/molecules/LibraryBody/LibraryBody';

type Props = {};
const Library: FC<Props> = ({ }) => {

    const [libraryItens, setLibraryItems] = useState([{ label: "Playlists" }, { label: "Podcasts" }, { label: "Artists" }, { label: "Albuns" }])

    return <>
        <div className='libraryHead'>
            <div className="libraryHeader">
                <Icon name="library" />
                <div>Library</div>
            </div>
            <div className='libraryHeaderActions'>
                <Icon className="libraryIcon" name="add" />
                <Icon className="libraryIcon" name="forwardArrow" />
            </div>
        </div>

        <div className='libraryItemsMain'>
            <div className='libraryItemsMap'>
                {libraryItens.map(item => {
                    return (
                        <div key={item.label} className='libraryItem'>{item.label}</div>
                    )
                })}
            </div>
        </div>
        <div>
            <LibraryBody />
        </div>
    </>;
};
export default Library;