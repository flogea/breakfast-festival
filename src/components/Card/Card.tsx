import { CardProps } from '../../App'
import styles from './Card.module.scss'

export const Card = ({ img, isEmpty, name, menu }: CardProps) => {

  if (isEmpty) {
    return (
      <div className={styles.emptyCard}>
        <div className={styles.image}>
          <h2 className={styles.h2}>Choose the restaurant</h2>
        </div>
        <div className={styles.menuEmpty}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <span className={styles.itemName}>some name</span>
              <span>450</span>
            </li>
            <li className={styles.menuItem}>
              <span className={styles.itemName}>some name</span>
              <span>450</span>
            </li>
            <li className={styles.menuItem}>
              <span className={styles.itemName}>some name</span>
              <span>450</span>
            </li>
            <li className={styles.menuItem}>
              <span className={styles.itemName}>some name</span>
              <span>450</span>
            </li>
            <li className={styles.menuItem}>
              <span className={styles.itemName}>some name</span>
              <span>450</span>
            </li>
            <li className={styles.menuItem}>
              <span className={styles.itemName}>some name</span>
              <span>450</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <h2 className={styles.h2}>{name}</h2>
        <img src={img} alt="" />
      </div>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          {menu?.map((item, index) => (
            <li key={`${item.name}_${index}`} className={styles.menuItem}>
              <span className={styles.itemName}>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
