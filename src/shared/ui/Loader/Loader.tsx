import './Loader.scss';
import { FC } from 'react';

interface LoaderProps  {
  className?: string;
}


export const Loader: FC<LoaderProps> = (props) => {
    
    
    return (
        <div className="lds-roller">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
        </div>
  )
}

export default Loader;