
import style from './Avatar.module.css'

export function Avatar ({hasBorder = true, src}) {


    return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar}
         src={src}/>
    )
}