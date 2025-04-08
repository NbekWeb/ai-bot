export default function Close({ className = '' }) {
    return (
        <span className={className}>
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>

    )
}