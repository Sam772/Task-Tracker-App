import PropTypes from 'prop-types'
import Button from './Button'

const Header = () => {
    return (
        <header className='header'>
            <h1>Task Tracker App</h1>
            <Button color="black" text="Add Task"/>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
