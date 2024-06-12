import { FC } from 'react';
import iconMap from '@/utils/iconMap';

type Props = {
    name: string,
    className?: string
};
const Icon: FC<Props> = ({ name, className }) => {
    return <div className={className}>
        {iconMap[name]}
    </div>;
};
export default Icon;