import BeginBox from './BeginBox';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <ul>
        <li>Как это Работает</li>
        <li>Членский состав</li>
        <li>Блог</li>
        <li>Наша история</li>
      </ul>
      <BeginBox/>
    </div>
  );
}

export default Header;
