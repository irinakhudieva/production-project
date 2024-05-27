import { useState } from 'react';
import classes from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}


export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

  return (
    <div 
      data-testid="sidebar" 
      className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
        <button 
          data-testid="sidebar-toggle" 
          onClick={onToggle}
        >
          {t('Переключить')}
        </button>
        <ThemeSwitcher />
        <LangSwitcher />
    </div>
  )
}

export default Sidebar;

