import { FC } from 'react';
import './MusicQueue.css'

type Props = {};
const MusicQueue: FC<Props> = ({ }) => {
    return (
        <div className='mq_mainWraper'>
            <div className='mq_header'>
                <div>Next in queue</div>
                <div>Open queue</div>
            </div>
            <div>

            </div>
        </div>
    );
};
export default MusicQueue;