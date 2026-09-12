export default function debounce<T extends (...args: any[]) => void>(
    fn: T,
    delay: number
) {
    let timer: number | undefined

    const debounced = (...args: Parameters<T>) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }

    debounced.cancel = () => {
        if (timer) clearTimeout(timer)
    }

    return debounced
}