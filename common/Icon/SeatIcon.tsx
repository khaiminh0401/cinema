const ItemDefault = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 58 48" fill="none">
            <rect x="1.18384" y="0.5" width="55.6018" height="34.0762" rx="16.5" stroke="white" />
            <rect x="13.3462" y="38.5404" width="31.2771" height="8.88063" rx="4.44031" stroke="white" />
        </svg>

    )
};

const ItemChoose = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 57 48" fill="none">
            <rect x="0.216797" width="56.6018" height="35.0762" rx="17" fill="#D9D9D9" />
            <rect x="12.3792" y="38.0404" width="32.2771" height="9.88063" rx="4.94031" fill="#D9D9D9" />
        </svg>
    );
};

const ItemHasBooked = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 58 48" fill="none">
            <path d="M37 8H31.5L28 15L24 8H18.5L24 18L18 27.5H24L28 21L31.5 27.5H37L31.5 17.5L37 8Z" fill="#D9D9D9" />
            <rect x="1.18384" y="0.5" width="55.6018" height="34.0762" rx="16.5" stroke="white" />
            <rect x="13.3462" y="38.5404" width="31.2771" height="8.88063" rx="4.44031" stroke="white" />
        </svg>
    );
};


export default {
    ItemChoose,
    ItemDefault,
    ItemHasBooked
}