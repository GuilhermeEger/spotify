import { FC } from 'react';
import Infos from '@/components/organisms/Infos/Infos';
import Menu from '@/components/organisms/Menu/Menu';
import Library from '@/components/organisms/Library/Library';
import MainContent from '@/components/organisms/MainContent/MainContent';
import PlayBar from '@/components/molecules/PlayBar/PlayBar';

import "./MainPage.css"

type Props = {};
const MainPage: FC<Props> = ({ }) => {
    return <>
        <div className='mainPageBody'>
            <div className='LeftSet'>
                <div className='mainMenu'>
                    <Menu />
                </div>
                <div className='library'>
                    <Library />
                </div>
            </div>
            <div className='middleSet'>
                <MainContent />
            </div>
            <div className='rightSet'>
                <Infos />
            </div>
        </div>
        <PlayBar />
    </>;
};
export default MainPage;