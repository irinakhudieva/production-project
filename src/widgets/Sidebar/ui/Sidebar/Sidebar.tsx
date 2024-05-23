import { useState } from 'react';
import classes from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarProps {
  className?: string;
}


export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
        <button onClick={onToggle}>toggle</button>
    </div>
  )
}

export default Sidebar;

