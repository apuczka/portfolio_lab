import facebook from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'



function Footer() {
    
    return (
        <div className='footer'>
            <div className='footer_text'>Copyright by Coders Lab</div>
            <img className='footer_img_1 fcb' src={facebook} alt="facebook" />
            <img className='footer_img_2 inst' src={instagram} alt="instagram" />
        
        </div>

    )

}

export default Footer;
