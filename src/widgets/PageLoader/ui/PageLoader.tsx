import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import Loader from 'shared/ui/Loader/Loader';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}


export const PageLoader: FC<PageLoaderProps> = (props) => {
    
    return (
        <div className={classNames(classes.PageLoader, {}, [])}>
           <Loader />
        </div>
  )
}

export default PageLoader;