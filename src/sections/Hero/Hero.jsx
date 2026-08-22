import './Hero.css'

function Hero(){
    return(
        <section className='hero'>
            <div className='hero-content'>
                <p className='hero-label'>PORTFOLIO</p>
                <h1 className='hero-name'>SenLiang Deng</h1>
                <p className='hero-title'>Computer Science Student & Software Developer</p>

                <div className='hero-actions'>
                    <button onClick={()=>{document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}} className='hero-btn primary'>View Projects</button>
                    <button onClick={()=>{document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}} className='hero-btn secondary'>About me</button>
                </div>


                
            </div>
            <div className='hero-image-wrapper'>
                <div className='hero-image-placeholder'>
                    SD
                </div>
            </div>
        </section>
    )
}

export default Hero;