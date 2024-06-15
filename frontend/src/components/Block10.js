import './Block10.css';
import image1block10 from '../img/IMAGE17.png'
import image2block10 from '../img/IMAGE18.png'

function Block10() {
  return (
    <div className="Block10">
        <ul>
            <li><img src={image1block10} alt=''/></li>
            <li><img src={image2block10} alt=''/></li>
        </ul>
        <div className='backgroundend'>
          <h1>Жизнь происходит за пределами вашего телефона</h1>
          <p>Сделайте свободное от телефона время частью своей повседневной жизни.</p>
          <div className='button'></div>
        </div>
    </div>
  );
}

export default Block10;