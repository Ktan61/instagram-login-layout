import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
    return(
        <>
        <div className={styles.footerLinksContainerOne}>
            <span className={styles.footerLinks}>Meta</span>
            <span className={styles.footerLinks}>About</span>
            <span className={styles.footerLinks}>Blog</span>
            <span className={styles.footerLinks}>Jobs</span>
            <span className={styles.footerLinks}>Help</span>
            <span className={styles.footerLinks}>API</span>
            <span className={styles.footerLinks}>Privacy</span>
            <span className={styles.footerLinks}>Terms</span>
            <span className={styles.footerLinks}>Locations</span>
            <span className={styles.footerLinks}>Instagram Lite</span>
            <span className={styles.footerLinks}>Threads</span>
            <span className={styles.footerLinks}>Contact Uploading & Non-Users</span>
            <span className={styles.footerLinks}>Meta Verified</span>
        </div> 
        <div className={styles.footerLinksContainerTwo}>
            <span className={styles.footerLinks}>
                <select>
                        <option name="languageSelect" id="languageSelect" value="null" selected>English</option>
                        <option value="1">Chinese</option>
                        <option value="2" >French</option>
                        <option value="3" >Spanish</option>
                </select>
            </span>
            <span className={`${styles.footerLinks} ${styles.copyright}`}>© 2024 Instagram from Meta</span>            
        </div>
        <div className={styles.footerMobile}>
            <p>from</p>
            <Image className={styles.footerMetaLogo} src={'/images/meta-logo.png'} alt="Meta logo" width={75} height={25}/>
        </div>
        </>
    )
}