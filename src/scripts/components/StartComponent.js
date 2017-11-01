import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    const {startGame} = this.props;
    return (
      <div className='container'>
        <h1 className='title start__title'>panini: собери свою коллекцию звезд футбола!</h1>
        <section className='section start__section section_main'>
          <p className='section__text'>Любишь футбол? Знаешь всех
            крутых футболистов? Проверь свои знания! Участвуй в викторине,
            ответь на вопросы о любимых игроках и стань обладателем 250 наклеек,
            коллекционного альбома или футболки со своим именем!
          </p>
          <button className='btn-main' onClick={startGame}>УЧАСТВОВАТЬ</button>
          <a className='section_main-link'
            href='https://ad.csdnevnik.ru/special/staging/panini/quizz-rules.pdf'
            target='_blank'>
            Правила конкурса </a>
        </section>
        <section className='section start__section section_main start__section_num'>
          <h2 className='section__subtitle section__subtitle_b'>
            призовой фонд от Panini
          </h2>
          <div className='section__content'>
            <div className='section__elem'>
              <div className='section__number'>130</div>
              <div className='section__desc'>
                <div className='section__descr-big'>Призов</div>
                <div className='section__descr-small'>альбом</div>
                <div className='section__descr-small'>+ 250 наклеек</div>
              </div>
            </div>
            <div className='section__elem'>
              <div className='section__number'>15</div>
              <div className='section__desc'>
                <div className='section__descr-big'>Главных призов</div>
                <div className='section__descr-small'>альбом</div>
                <div className='section__descr-small'>+ 250 наклеек</div>
                <div className='section__descr-small'>+ футболка с твоим именем</div>
              </div>
            </div>
          </div>
        </section>
        <section className='section start__section section_border start__section_game-one'>
          <div className='section__inner'>
            <h2 className='section__subtitle section__subtitle_b'>Викторина «Знаешь ли ты звёзд мирового футбола?»</h2>
            <p className='section__text'>Ответь правильно на вопросы викторины и поборись за звание самого активного
              болельщика!</p>
            <button className='btn-main'>играть</button>
          </div>
        </section>
        <section className='section start__section section_border start__section_game-two'>
          <div className='section__inner'>
            <h2 className='section__subtitle section__subtitle_b'>Конкурс «Самый активный болельщик»</h2>
            <p className='section__text'>Как ты поддерживаешь любимую команду? Расскажи всем! Присылай фотографии в
              форме футбольного клуба, с мячом, шарфом, набором наклеек, со стадиона или со своей собственной тренировки
              и докажи, что ты самый активный болельщик! Авторы самых ярких и интересных снимков смогут побороться за
              главный приз: именную футболку!</p>
            <button className='btn-main'>отправить фото</button>
          </div>
        </section>
        <section className='section start__section section_border start__section_game-adv'>
          <div className='section__inner'>
            <h2 className='section__subtitle section__subtitle_b'>Наклейки Panini
              – это азарт поиска и радость обладания!</h2>
            <p className='section__text'>Золотой мир футбола в альбоме Panini
              FIFA365-2018. Коллекция наклеек посвящена 25 лучшим футбольным
              клубам. Каждый клуб представлен наклейками с логотипом, командным
              фото и ключевыми игроками в официальной форме. Про каждого футболиста
              в коллекции собрана важная статистика: участие в чемпионатах, забитые
              голы, игровая позиция и ведущая нога, гражданство, год рождения и
              статус игрока. Всего в коллекции для вклеивания в альбом 602 наклейки.
            </p>
            <h2 className='section__info'>Хочешь знать больше о мировом клубном
              футболе? Собирай наклейки Panini FIFA 365-2018, обменивайся с друзьями
              и создай свою коллекцию звезд футбола!
            </h2>
          </div>
        </section>
        <section className='section start__section section_buy'>
          <a className='section__link-buy' href='/'>Где купить? </a>
        </section>
      </div>);
  }
}

StartComponent.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default StartComponent;
