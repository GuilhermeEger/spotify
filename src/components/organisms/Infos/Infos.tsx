import Icon from '@/components/atoms/Icon/Icon';
import { FC } from 'react';

type Props = {};
const Infos: FC<Props> = ({ }) => {
  return <>
    <div className='indoHeader'>
      <div>Title</div>
      <div>
        <Icon name="moreHorizontal" />
        <Icon name="close" />
      </div>
    </div>
  </>;
};
export default Infos;