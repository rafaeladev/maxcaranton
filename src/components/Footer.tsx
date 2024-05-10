import mail from '/mail.svg';
import instagram from '/instagram.svg';
import { Link } from 'react-router-dom';
import banner from '/logo-footer.svg';

const Footer = () => {
    return (
        <footer className='footerbar'>
            <div className='footerbar__content'>
                <img
                    src={banner}
                    alt='footerbar__banner'
                    className='footerbar__banner'
                />
                <p className='footerbar__text'>COACH SPORTIF</p>

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
