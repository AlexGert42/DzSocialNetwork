import inputStyle from './inputStyle.module.scss'
import textareaStyle from './textareaStyle.module.scss'

export const FormControl = (Element: string) => ({input, meta, ...props}: any) => {
    let styles: any
    if (Element === 'input') {
        styles = inputStyle
    } else if (Element === 'textarea') {
        styles  = textareaStyle
    }
    return (
        <div className={styles.element}>
            <Element
                className={meta.error ? `${styles.element__field} ${styles.error}` : styles.element__field}
                {...input}
                {...props}
            />
            {meta.touched && meta.error && <span className={styles.element__error}>{meta.error}</span>}
        </div>
    )
}

