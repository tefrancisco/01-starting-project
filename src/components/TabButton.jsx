export default function TapButton({children, onSelect, isSelected}) {

    return (
        <li>
            {/* here the action onClick will execute the function passed by
            the onSelect prop that we receive here */}
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}