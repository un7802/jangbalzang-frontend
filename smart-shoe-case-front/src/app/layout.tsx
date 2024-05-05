import type { Metadata } from "next";
import style from './layout.module.scss'
import { Left } from "./_components/left/Left";
import { Navbar } from "@/components/nav/Navbar";

export const metadata: Metadata = {
  title: "스마트 신발장",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
      }}>
        <div className={style.rootLayout}>
          <div className={style.left}>
            <Left/>
          </div>
          <div className={style.content}>
            <Navbar/>
            <div style={{
              width: '100%',
            }}>
              {children}
            </div>
          </div>
          <div className={style.right}>

          </div>
        </div>
      </body>
    </html>
  );
}
