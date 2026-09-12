type FilterButtonProps = {
    title?: string,
    action?: () => void
    color?: string
}

export function FilterButton({ title, action, color }: FilterButtonProps) {
    return (
        <button onClick={() => action?.()}>{title}</button>
    )
}