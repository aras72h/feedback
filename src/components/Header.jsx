function Header(props) {
    return (
        <header>
            <h2>{props.text}</h2>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback Component'
}

export default Header