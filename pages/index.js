import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Form from '@/components/Form'
import Button from '@/components/Button'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Login &#x2022; Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={`${styles.main}`}>
        
        <div className={`${styles.mobileOnly} ${styles.mobileLanguage}`}>
          <select>
              <option name="languageSelect" id="languageSelect" value="null" selected>English</option>
              <option value="1">Chinese</option>
              <option value="2" >French</option>
              <option value="3" >Spanish</option>
          </select>
        </div>

        <div className={styles.containerOne}>
          <Image className={styles.instagramText} src={'/images/instagram-text.png'} alt="instagram logo" width={175} height={117}/>

          <div className={styles.mobileOnly}>
            <Button className={styles.facebookButton} title="Continue with Facebook"/>
            <div className={styles.linebreakOr}><hr/><span>OR</span><hr/></div>
          </div>
          
          <div className={styles.loginForm}>
            <Form placeholder="Phone number, username, or email" type="text"/>
            <Form placeholder="Password" type="password"/> 
          </div>   

          <div className={styles.mobileOnly}><p className={styles.mobileForgotPw}>Forgot password?</p></div>

          <Button title="Log In"/>

          <div className={styles.desktopOnly}><div className={styles.linebreakOr}><hr/><span>OR</span><hr/></div></div>

          <div className={`${styles.desktopOnly} ${styles.loginText}`}>
            <div className={styles.loginFacebook}>
              <Image className={styles.logoFacebook} src={'/images/facebook-logo.png'} alt="facebook icon" width={16} height={16}/>
              <p className={styles.loginFacebookText}>Log in with Facebook</p>    
            </div> 
            <p className={styles.loginForgotPw}>Forgot password?</p>
          </div>
        </div>

        <div className={styles.containerTwo}>
          <p>Don't have an account? <span>Sign up</span></p>
        </div>

        <div className={`${styles.desktopOnly} ${styles.containerThree}`}>
          <div className={styles.getAppText}>Get the app.</div>
          <div className={styles.getAppImageLinks}>
            <Image className={styles.getAppLink} src={'/images/google-play.png'} alt="google play download link" width={135} height={40}/>
            <Image className={styles.getAppLink} src={'/images/microsoft.png'} alt="microsoft download link" width={115} height={40}/>
          </div>
        </div>

        <Footer/>
      </main>
    </>
  )
}
