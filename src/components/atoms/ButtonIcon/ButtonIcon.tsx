import { FC } from 'react';
import "./ButtonIcon.css"
import Icon from '../Icon/Icon';

type Props = {
    iconName: string,
    label: string
};
const ButtonIcon: FC<Props> = ({ iconName, label }) => {
    return <div className='buttonIcon'>
        <div>{label}</div>
        <Icon name={iconName} />
    </div>;
};
export default ButtonIcon;