import propTypes from 'prop-types'

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

// propTypes make your application more robust
Header.propTypes = {
    text: propTypes.string,
}

export default Header