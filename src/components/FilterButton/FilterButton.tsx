import styles from './FilterButton.module.css'

type FilterButtonProps = {
    title?: string,
    action?: () => void
    style?: "primary" | "secondary"
}

export function FilterButton({ title, action, style }: FilterButtonProps) {

    const buttonClass = style === "primary" ? styles.buttonPrimary : styles.buttonSecondary

    return (
        <button className={buttonClass} onClick={() => action?.()}>{title}</button>
    )
}