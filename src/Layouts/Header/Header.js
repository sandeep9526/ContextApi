import styles from "../../Assets/Style/Header.module.scss";
import { Link } from "react-router-dom";
import GetIcon from "Components/Icon/GetIcon";
import { BasketContext } from "Store/BasketContext";
import { useContext } from "react";

const Header = () => {
  const { basketItems, setBasketIsOpen } = useContext(BasketContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h2>Website</h2>
        </Link>
      </div>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                to="/"
                className={`${styles.basketBtn} ${styles.a}`}
                onClick={(e) => {
                  e.preventDefault();
                  setBasketIsOpen((oldState) => !oldState);
                }}
              >
                <GetIcon icon="BsCart4" size={25} color="#ffffff" />
                {basketItems.length > 0 && <span className={styles.basketLength}> {basketItems.length} </span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
