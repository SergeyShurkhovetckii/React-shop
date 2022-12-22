import logo from '../assets/img/logo.svg';
function Logos () {
    const {logoAlt} = "React-shop Logo"
    return (
        <img className='header-logo__pic' src={logo} alt= {logoAlt} width= '100px'/>
    )
}
export {Logos}