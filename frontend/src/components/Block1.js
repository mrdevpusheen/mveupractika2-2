import './Block1.css';
import mainimage from '../img/IMAGE3.png'

function Block1() {
  return (
    <div className="Block1">
        <div className='Block1Text'>
            <h1>Представляем Aro</h1>
            <p>Aro - это первое цифровое решение для домашнего благополучия, разработанное для семей. Платформа Aro гарантирует, что вы не пропустите самое важное, позволяя всем без труда отложить свои телефоны и присутствовать в полной мере</p>
            <ul>
                <li><button className='button1'>Присоединяйтесь прямо сейчас</button></li>
                <li><div className='button2'>Как это работает</div></li>
            </ul>
        </div>
        <div className='Block1Image'>
            <img src={mainimage} alt=''/>
        </div>
    </div>
  );
}

export default Block1;