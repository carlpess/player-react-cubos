import './style.css'
import Logo from '../../assets/logo.svg'
import ProfileImage from '../../assets/profile2.jpg'


export default function Header() {
    return (
        <header>
            <img className='logo' src={Logo} alt='logo' />
            <div className='container-wellcome'>
                <img src={ProfileImage} className='profile-img' alt='profile' />
                <strong>Bem vindo, Carlos</strong>
            </div>
        </header>
    )
}