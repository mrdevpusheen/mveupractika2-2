import './Block3.css';
import Logo1 from '../svg/Logo1.svg'
import Logo2 from '../svg/Logo2.svg'
import Logo3 from '../svg/Logo3.svg'
import Logo4 from '../svg/Logo4.svg'
import Logo5 from '../svg/Logo5.svg'
import Logo6 from '../svg/Logo6.svg'

function Block3() {
  return (
    <div className="Block3">
        <h1>Фигурирующий в</h1>
        <div className='ListLine'>
            <ul className='listnews1'>
                <li className='item1'><img src={Logo1} alt=''/></li>
                <li className='item2'><img src={Logo2} alt=''/></li>
            </ul>
            <ul className='listnews2'>
                <li><img src={Logo3} alt=''/></li>
                <li><img src={Logo6} alt=''/></li>
            </ul>
            <ul className='listnews3'>
                <li className='item5'><img src={Logo4} alt=''/></li>
                <li className='item6'><img src={Logo5} alt=''/></li>
            </ul>
        </div>
        
        
        
    </div>
  );
}

export default Block3;