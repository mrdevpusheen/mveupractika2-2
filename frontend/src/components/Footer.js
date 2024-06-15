import './Footer.css';
import logofooter from '../svg/LogoFooter.svg'

function Footer() {
  return (
    <div className="Footer">
      <div className='OrderAro'>
        <h3>Order your Aro</h3>
        <ul>
          <li>Join Aro now</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className='About'>
        <h3>About</h3>
        <ul>
          <li>Our story</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='Contact'>
        <h3>Contact</h3>
        <ul>
          <li>Contact us</li>
          <li>Support</li>
        </ul>
      </div>
      <div className='Subscribe'>
        <h3>Subscribe</h3>
        <input className='SubscribeInput'></input>
      </div>
      <div className='logofooter'>
        <img src={logofooter} alt=''/>
      </div>
    </div>
  );
}

export default Footer;
