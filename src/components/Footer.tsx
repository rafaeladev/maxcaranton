import mail from '/mail.svg';
import instagram from '/instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footerbar'>
            <div className='footerbar__content'>
                <p className='footerbar__title'>Max Caranton</p>
                <p>Coach sportif</p>

                <div className='footerbar__icons'>
                    <img
                        src={mail}
                        alt='mail'
                    />
                    <img
                        src={instagram}
                        alt='instagram'
                    />
                </div>
            </div>
            <p className='footerbar__credits'>
                Site by <Link to='https://www.rafaeladsdo.com/'>@Rafaela Oliveira 2024</Link>
            </p>
        </footer>
    );
};

export default Footer;
