import style from './left.module.scss';

export function Left() {

    return (
        <div className={style.leftRoot}>
            <span className={style.heading}>편리한 스마트 신발장</span>
            <span className={style.description}>장발장 팀이 제공해드려요.</span>
        </div> 
    )
}