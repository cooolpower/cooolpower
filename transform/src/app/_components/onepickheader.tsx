import style from "./onepickheader.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Onepickheader() {
  return (
    <>
      <div id="header">
        <div className={style.topArea}>
          <div className={style.container}>
            <div className={style.logo}>
              <Link href="/" className={style.logoLink}>
                <Image width={160} height={78} src="https://i.jobkorea.kr/content/images/personal/main/logo_motion_pc.gif" alt="JOBKOREA" className={style.logoImage}></Image>
              </Link>
              <Link href="/OnePick/JobList">
                <span className={style.logoText}>이직은 원픽</span>
              </Link>
            </div>
            <ul className={style.topMenu}>
              <li className={`${style.topMenuList} ${style.active}`}>
                <a href="/OnePick/JobList" className={style.topMenuLink}>합격축하금 공고</a>
              </li>
              <li className={style.topMenuList}>
                <a href="/OnePick/Serviceinfo" className={style.topMenuLink}>원픽서비스 안내</a>
              </li>
                <li className={style.topMenuList}><a href="/Login/Login_Tot.asp?re_url=/OnePick/JobList" className={style.signButton}>로그인/회원가입</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}