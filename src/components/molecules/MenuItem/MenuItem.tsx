import { FC } from 'react';
import Icon from '@/components/atoms/Icon/Icon';
import "./MenuItem.css"

type Props = {
    iconName: string,
    label: string
};
const MenuItem: FC<Props> = ({ iconName, label }) => {
    return (
        <div className='mi_body'>
            <Icon className="mi_icon" name={iconName} />
            <div className='mi_label'>{label}</div>
        </div>)
};
export default MenuItem;