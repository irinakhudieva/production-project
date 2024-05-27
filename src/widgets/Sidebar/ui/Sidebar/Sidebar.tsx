import { useState } from 'react';
import classes from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

interface SidebarProps {
  className?: string;
}


export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

  return (
    <div 
      data-testid="sidebar" 
      className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
        {/* <button 
          data-testid="sidebar-toggle" 
          onClick={onToggle}
        >
          toggle
        </button> */}
        <ThemeSwitcher />
        <LangSwitcher />
    </div>
  )
}

export default Sidebar;

