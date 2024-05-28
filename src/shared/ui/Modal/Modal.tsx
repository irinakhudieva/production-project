import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import classes from './Modal.module.scss';
import Portal from '../Portal/Portal';

interface ModalProps  {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}


export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose } = props;

    const [ isClosing, setIsClosing ] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const onKeydown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeydown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeydown);
        }
    }, [isOpen, onKeydown])

    const onClickContent = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    const mods: Record<string, boolean> = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing,
    }
    
    return (
        <Portal>
            <div className={classNames(classes.Modal, mods, [className])}>
                <div 
                    className={classes.overlay} 
                    onClick={closeHandler}
                >
                    <div 
                        className={classes.content}
                        onClick={onClickContent}
                    >
                        <button onClick={closeHandler}>X</button>
                        { children }
                    </div>
                </div>
            </div>
        </Portal>  
    )
}

export default Modal;