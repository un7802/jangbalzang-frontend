import Image from 'next/image';
import style from './registeredshoes.module.scss';

export function RegisteredShoesBoard() {

    return (
        <div className={style.registeredShoesBoardRoot}>
            <span className={style.heading} style={{marginLeft: 12}}>등록된 신발</span>
            <div className={style.rows}>
                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>

                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>

                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>

                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>

                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>

                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>

                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>

                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>

                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>

                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>

                <div className={style.rowItemRoot}>
                    <div className={style.rowItemImageBox}>
                        <Image
                            src={'/assets/svg/shoe.png'}
                            width={57}
                            height={56}
                            alt=''
                        />
                    </div>
                    <div className={style.rowItemNameRoot}>
                        <span>런닝화</span>
                    </div>
                </div>
            </div>
        </div>
    )
}