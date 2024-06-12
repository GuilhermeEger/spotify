"use content"

import { FC, useEffect, useState } from 'react';
import "./LibraryBody.css";
import Icon from '@/components/atoms/Icon/Icon';
import ButtonIcon from '@/components/atoms/ButtonIcon/ButtonIcon';
import LibraryItem from '@/components/atoms/LibraryItem/LibraryItem';

type Props = {};

interface LibraryItems {
    tittle: string,
    info: string
}

const LibraryBody: FC<Props> = ({ }) => {

    const [libraryItems, setLibraryItems] = useState<LibraryItems[]>([{}]);

    useEffect(() => {
        //get from back
        getItems();
    }, [])

    function getItems() {

        const backEndItems: LibraryItems[] = [
            { tittle: "Album 1", info: "Some info here" },
            { tittle: "Album 2", info: "Some info here" },
            { tittle: "Album 3", info: "Some info here" },
            { tittle: "Album 4", info: "Some info here" },
            { tittle: "Album 5", info: "Some info here" },
            { tittle: "Album 6", info: "Some info here" },
            { tittle: "Album 7", info: "Some info here" }]

        setLibraryItems(backEndItems);
    }

    return <div className='ml_mainDiv'>
        <div className='ml_header'>
            <Icon name="search" />
            <ButtonIcon iconName='list' label='Recents' />
        </div>
        <div className='ml_itemsBody'>

            {libraryItems.map(item => {
                return <LibraryItem tittle={item.tittle} info={item.info} />
            })}

        </div>
    </div>;
};
export default LibraryBody;