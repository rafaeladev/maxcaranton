import banner from '/max-banner-logo.svg';

function Banner() {
    return (
        <div className='bannerbar'>
            <div className='bannerbar__title'>
                <img
                    src={banner}
                    alt='logo-banner'
                />
                <div className='bannerbar__button'>
                    <button className='btn'>Contactez-moi</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
