import styles from './Form.module.css'

export default function Form({
    placeholder="",
    type="",
}) {
    return(
        <>
          <input className={styles.usernameInput} type={type} placeholder={placeholder}></input>
        </>
    )
}


