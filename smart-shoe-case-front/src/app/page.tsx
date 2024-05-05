import { RegisteredShoesBoard } from "./_components/dashboard/RegisteredShoesBoard";
import { ShoeCaseManagementBoard } from "./_components/dashboard/ShoeCaseManagementBoard";
import { ShoeCaseStateBoard } from "./_components/dashboard/ShoeCaseStateBoard";
import { HumidityInfo } from "./_components/info/HumidityInfo";
import style from './layout.module.scss';

export default function Home() {
  return (
    <main style={{
      width: 'calc(100% - 40px)',
      paddingLeft: 20,
      paddingRight: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 24,
      gap: 16
    }}>
      <ShoeCaseStateBoard/>
      <HumidityInfo/>
      <ShoeCaseManagementBoard/>
      <RegisteredShoesBoard/>

      <div className={style.registerButton} style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <span style={{
          color: '#000',
          fontWeight: 700,
          fontSize: 14
        }}>
          신발 등록하기!
        </span>
      </div>
    </main>
  );
}
