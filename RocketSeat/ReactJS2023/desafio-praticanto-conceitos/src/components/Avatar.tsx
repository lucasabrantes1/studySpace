
import { ImgHTMLAttributes } from 'react';
import style from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar ({hasBorder = true, ...props}: AvatarProps) {
    return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar}
        {...props}
        />
    );
}