import fb from './assets/facebook.svg'
import insta from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import youtube from './assets/youtube.svg'

function Footer() {
    return (
        <>        
        <div className='socials-div'>
            <img src={fb} />
            <img src={insta} />
            <img src={twitter} />
            <img src={youtube} />
        </div>
        <div className="terms-div">
            <a href="">Conditions of Use</a>
            <a href="">Privacy &#38; Policy</a>
            <a href="">Press Room</a>
        </div>
        <p>&copy; 2023 Movie box HNG-X Project by <a href="">Kato Mahad</a></p>
        </>
    )
}
 export default Footer