import Image from 'next/image';
import style from './shoecaseboard.module.scss';

export function ShoeCaseStateBoard() {
    return (
        <div className={style.shoeCaseStateBoardRoot}>
            <Image
                src={'/assets/svg/ic_shoe.svg'}
                width={180}
                height={128}
                alt='shoe'
            />
            <div className={style.rows}>
                <div className={style.rowItem}>
                    <span className={style.descriptionText}>습도</span>
                    <span className={style.infoOrangeText}>24.6</span>
                </div>
                <div className={style.rowItem}>
                    <span className={style.descriptionText}>온도</span>
                    <span className={style.infoGreenText}>17.3</span>
                </div>
                <div className={style.rowItem}>
                    <span className={style.descriptionText}>건조</span>
                    <span className={style.infoRedText}>7.9</span>
                </div>
            </div>
        </div>
    )
}