import MenuItem from '@/components/molecules/MenuItem/MenuItem';
import { FC } from 'react';

type Props = {};
const Menu: FC<Props> = ({ }) => {
    return <>
        <MenuItem iconName="home" label="Home" />
        <MenuItem iconName="search" label="Search" />
    </>;
};
export default Menu;