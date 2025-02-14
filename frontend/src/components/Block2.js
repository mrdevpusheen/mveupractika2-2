import './Block2.css';
import block2image from '../img/IMAGE4.png'
import block2image2 from '../img/IMAGE5.png'
import block2image3 from '../img/IMAGE6.png'
import block2image4 from '../img/IMAGE7.png'

function Block2() {
  return (
    <div className="Block2">
        <ul>
            <li>
                <h2>Проведите время с пользой вместе</h2>
                <p>У нас не так уж много времени остается на общение с детьми - 18 лет пролетают незаметно. Aro помогает родителям и детям отложить свои телефоны, когда наступает семейное время, чтобы вы не оглядывались назад и не жалели, что проводили больше времени со своей семьей и меньше разговаривали по телефону.</p>
                <h3>75%</h3>
                <p className='Text3'>многие родители считают, что важно проводить время всей семьей без присутствия экранов.</p>
            </li>
            <li><img src={block2image} alt=''/></li>
        </ul>
        <ul>
            <li><img src={block2image2} alt=''/></li>
            <li>
                <h2>Прививайте своим детям здоровые привычки</h2>
                <p>Дарить своим детям смартфоны - непростое решение. Aro помогает им наладить здоровые отношения со своими телефонами, позволяет вам формировать полезные привычки и дает вам уверенность в том, что у них есть все необходимое для обеспечения безопасности и успеха.</p>
                <h3>83%</h3>
                <p className='Text3'>многие родители считают, что важно проводить время всей семьей без присутствия экранов.</p>
            </li>
        </ul>
        <ul>
            <li>
                <h2>Восстановите связь со своим партнером</h2>
                <p>Мы все через это проходили. День подходит к концу, дети наконец-то засыпают, и что происходит? Мы садимся на диван и берем в руки телефоны, вместо того чтобы связаться с человеком, который сидит рядом с нами. Если вы поместите свой телефон в режим Aro, это покажет вашему партнеру, что вы действительно присутствуете рядом с ним.​</p>
                <h3>79%</h3>
                <p className='Text3'>многие родители считают, что важно проводить время всей семьей без присутствия экранов.</p>
            </li>
            <li><img src={block2image3} alt=''/></li>
        </ul>
        <ul>
            <li><img src={block2image4} alt=''/></li>
            <li>
                <h2>Удели немного заслуженного "моего времени".</h2>
                <p>Иногда нам нужно немного утихомирить посторонние голоса. Aro - это ваше напоминание о том, что можно уделить немного времени себе. Это может быть чтение книги, размышления о прошедшем дне или даже просто хороший ночной сон. Ты этого заслуживаешь.</p>
                <h3>91%</h3>
                <p className='Text3'>многие родители считают, что важно проводить время всей семьей без присутствия экранов.</p>
            </li>
        </ul>
    </div>
  );
}

export default Block2;