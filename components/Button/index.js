import styles from './Button.module.css'

export default function Button({
    title=""
}) {
    return(
        <button class={styles.defaultButton}>{title}</button> 
    )
}