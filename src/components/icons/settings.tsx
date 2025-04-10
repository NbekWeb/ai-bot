



export default function User({ className = '' }) {
    return (
        <span className={className}>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.75" y="3.75" width="6.5" height="6.5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
                <rect x="14.75" y="3.75" width="6.5" height="6.5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
                <rect x="14.75" y="14.75" width="6.5" height="6.5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
                <rect x="2.75" y="14.75" width="6.5" height="6.5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        </span>

    )
}