import { FC } from 'react';
import Icon from '@/components/atoms/Icon/Icon';
import "./MenuItem.css"

type Props = {
    iconName: string,
    label: string
};
const MenuItem: FC<Props> = ({ iconName, label }) => {
    return (
        <div className='menuBody'>
            <Icon name={iconName} />
            <div className='menuLabel'>{label}</div>
        </div>)
};
export default MenuItem;