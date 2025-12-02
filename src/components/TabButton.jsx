export default function TapButton(props) {

    function handleClick() {
        console.log('Hello World!')
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    )
}