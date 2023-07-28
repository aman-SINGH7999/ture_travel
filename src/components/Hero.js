import './HeroStyle.css'
// import heroimg1 from "../images/pexels-anand-dandekar-1532771.jpg"
const Hero = (props)=>{
    return (
        <>
        <div className={props.cName}>
            <img alt='heroImage' src={props.heroimg}></img>
            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                {/* <br></br> */}
                <a href={props.url} className={props.btnClass}>{props.btnText}</a>
            </div>
        </div>

        </>
    )
}

export default Hero;