import style from './shoecasemanage.module.scss';

export function ShoeCaseManagementBoard() {

    return (
        <div className={style.shoeCaseManageRoot}>
            <span className={style.heading} style={{marginLeft: 12}}>신발장 관리</span>
            <div className={style.rows}>
                <div className={style.rowItemRoot}>
                    <div className={style.circle}/>
                    <span className={style.itemText}>건조하기</span>
                </div>
                <div className={style.rowItemRoot}>
                    <div className={style.circle}/>
                    <span className={style.itemText}>LED</span>
                </div>
            </div>
        </div>
    )
}