import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faHackerrank, faStackOverflow, faXTwitter , faLinkedinIn, faDiscord, faCodepen} from '@fortawesome/free-brands-svg-icons';
import "./Fontawsome.css";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
library.add(faFacebook, faTwitter, faInstagram, faGithub, faEnvelope, faHackerrank, faStackOverflow);

const SocialMediaIcons = () => {
    return (
      <div className='SocialMediaIcon'>
        <a href="https://www.linkedin.com/in/vanshika-jain-55b273254/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} size="xs" style={{color:'white'}}/>
        </a>
        
        <a href="https://github.com/kavya-sys" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="1x" style={{color:'white'}} />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDktTqKJpwCffZPKMCZZzLVGjvhNTbHZzBPJbhFXFkmfFkLDwLLwNlpFpMrkHflRQdmQV" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="1x" style={{color:'white'}} />
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} size="1x" style={{color:'white'}} />
        </a>
        <a href="https://discordapp.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} size="1x" style={{color:'white'}} />
        </a>
        <a href='https://codepen.io/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCodepen} size="1x" style={{color:'white'}} />
        </a>
        </div>

    )}

export default SocialMediaIcons;