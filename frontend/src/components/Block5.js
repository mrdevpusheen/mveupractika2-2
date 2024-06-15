import './Block5.css';
import Block5img1 from '../img/IMAGE9.png'
import Block5img2 from '../img/IMAGE10.png'
import Block5img3 from '../img/IMAGE11.png'

function Block5() {
  return (
    <div className="Block5">
        <ul>
            <li>
              <h1>Опыт Aro</h1>
              <p>Aro - это гораздо больше, чем просто приложение для вашего телефона. Речь идет о том, что происходит, когда вы кладете трубку. Aro позволяет родителям и детям общаться, создавая среду, в которой телефоны не отвлекают.</p>
              <div className='see'>See How it Works</div>
            </li>
            <li className='imageitem1'><img src={Block5img1} alt=''/></li>
        </ul>
        <ul>
            <li className='imageitem2'><img src={Block5img2} alt=''/></li>
            <li className='textitem'>
              <h1>Приложение Aro</h1>
              <p>Приложение Aro превращает в игру то, что происходит вне вашего телефона. Приложение автоматически подключается к устройству Aro Home, измеряет время, которое вы проводите вдали от телефона, напоминает вам о необходимости делать перерывы в работе, показывает данные, которые помогут улучшить ваши привычки в использовании телефона, и даже позволяет вам подключаться и соревноваться с другими пользователями.</p>
              <div className='see'>See How it Works</div>
            </li>
        </ul>
        <ul>
            <li>
              <h1>Устройство Aro Home</h1>
              <p>Он красив, спроектирован так, чтобы его можно было увидеть, и оснащен множеством технологий. Устройство Aro Home автоматически подключается к вашему телефону, когда его помещают внутрь, и начинает измерять время, которое вы проводите вдали от телефона. О да. Он также заряжает сразу пять телефонов.</p>
              <div className='see'>See How it Works</div>
            </li>
            <li className='imageitem3'><img src={Block5img3} alt=''/></li>
        </ul>
    </div>
  );
}

export default Block5;