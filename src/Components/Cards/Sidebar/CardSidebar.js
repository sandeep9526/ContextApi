import styles from "../../../Assets/Style/BasketSidebar.module.scss";
import emptyCardImg from "../../../Assets/Images/empty_cart.svg";
import GetIcon from "Components/Icon/GetIcon";
import Title from "Components/Others/Title/Title";
import CardItem from "../Card/CardItem";
import { BasketContext } from "Store/BasketContext";
import { useContext, useRef } from "react";
import { ToastSucess } from "features/ToastMessage";

const CardSidebar = () => {
  const { basketIsOpen, setBasketIsOpen, setBasketItems, basketItems, basketTotal: _basketTotal } = useContext(BasketContext);
  const container = useRef();

  const CheackoutHandler=()=>{
    ToastSucess("Order Placed Successfully")
    setBasketItems([])
  }
  return (
    
    <div
      className={`${styles.sidebarContainer} ${basketIsOpen==true ? styles.show : styles.hide}`}
      ref={container}
      onClick={(event) => event.target === container.current && setBasketIsOpen(false)}
    >
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <div className={styles.title}>
            <Title txt="your Card" size={20} transform="uppercase" />
            {<small>your card has got {basketItems.length} items</small>}
          </div>
          <button className={styles.close} onClick={() => setBasketIsOpen(false)}>
            <GetIcon icon="BsX" size={30} />
          </button>
        </div>
        {basketItems.length > 0 ? (
          <>
            <div className={styles.items}>
              {basketItems?.map((item, key) => (
                <CardItem data={item} key={key} />
              ))}
            </div>
            <div className={styles.basketTotal}>
              <div className={styles.total}>
                <Title txt="Card Summary" size={23} transform="uppercase" />
                <GetIcon icon="BsFillCartCheckFill" size={25} />
              </div>
              <div className={styles.totalPrice}>
                <small>total try</small>
                <div className={styles.price}>
                  <span>{_basketTotal.toFixed(2)}</span>
                </div>
              </div>
              <button type="button" onClick={CheackoutHandler} className={styles.confirmBtn}>
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className={styles.emptyBasket}>
            <img src={emptyCardImg} alt="" />
            <Title txt="your basket is empty" size={23} transform="uppercase" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSidebar;
