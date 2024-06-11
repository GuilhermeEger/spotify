import { FC } from 'react';
import iconMap from '@/utils/iconMap';

type Props = {
    name: string
};
const Icon: FC<Props> = ({ name }) => {
    return <>
        {iconMap[name]}
    </>;
};
export default Icon;