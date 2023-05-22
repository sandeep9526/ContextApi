import AddToCardBtn from "Components/Cards/Card/AddToCardBtn";
import GetIcon from "Components/Icon/GetIcon";
import Quantity from "Components/Cards/Quantity/Quantity";
import Title from "Components/Others/Title/Title";
import { BasketContext } from "../../Store/BasketContext";
import { useContext, useState ,useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import styles from "../../Assets/Style/Detail.module.scss";
import { authFetch } from "Middleware/axios/intance";
import { ToastError } from "features/ToastMessage";

const ViewProductDetail = () => {
  const { id } = useParams();
  let ids = id.split("-");
  ids = ids[ids.length - 1];
  const [productData,setProductData]=useState()  

  const { basketItems } = useContext(BasketContext);



  const getItemFromBasket = (data) => {
    let filter = basketItems.length > 0 && basketItems.filter((item) => item.id === data.id)[0];
    if (filter) {
      return filter;
    } else {
      return data;
    }
  };

  const GetProductData = async () => {
    try {
        const resp = await authFetch.get(`/products/${ids}`)
        setProductData(resp.data)
    } catch (error) {
        ToastError(error)
    }
  }
      
  useEffect(() => {
    GetProductData()
  },[])

  return (
    <section className={styles.detail}>
      {!productData ? <>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Title txt="Loading..." size={25} transform="uppercase" />
        </div>
        </> : <>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.img}>
              <img src={productData.image} alt="" />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>
                <Title txt={productData.title} transform="uppercase" size={20} />
              </div>
              <div className={styles.category}>
                  {productData.category}
              </div>
              <div className={styles.price}>
                <p>
                  {productData.price.toFixed(2)} <small>TRY</small>
                </p>
              </div>
              <div className={styles.addToBasketAndQuantity}>
                <div className={styles.quantityBox}>
                  <NavLink to="/" ><button className={styles.addToBasket}>
                  <i className="fa-solid fa-backward"></i> Get Back
                  </button> </NavLink>
                </div>
                <AddToCardBtn data={productData} />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <Title txt="Description" size={20} transform="capitalize" />
            <p className={styles.desc}>{productData.description}</p>
          </div>
        </div>
      </>}
    </section>
  );
};

export default ViewProductDetail;
