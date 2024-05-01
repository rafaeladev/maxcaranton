import banner from '/banner.svg';

function Banner() {
    return (
        <div className='bannerbar'>
            <img
                src={banner}
                alt='banner'
            />
            <div className='siteWrapper'>
                <div className='bannerbar__title'>
                    <h1>Max</h1>
                    <h1>Caranton</h1>
                    <p>Coach Sportif</p>
                    <button className='btn'>Contactez-moi</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
