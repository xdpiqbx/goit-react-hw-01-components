import PropTypes from 'prop-types';

import s from './Statistics.module.css';

export default function Statistics({ title, statisticalDada }) {
  return (
    // title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : null}
      <ul className={s.statList}>
        {statisticalDada.map(statisticalItem => {
          const { id, label, percentage } = statisticalItem;
          return (
            <li
              className={s.item}
              key={id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function randomColor() {
  return `rgb(
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)}
        )`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
