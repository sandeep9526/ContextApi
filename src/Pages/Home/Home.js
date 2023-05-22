import styles from "../../Assets/Style/Home.module.scss";
import Card from "Components/Cards/Card/Card";
import Title from "Components/Others/Title/Title";
import { useState ,useEffect } from "react";
import { authFetch } from "Middleware/axios/intance";
import { ToastError } from "features/ToastMessage";

const Home = () => {
  const [productData,setProductData]=useState()

  const GetProductData = async () => {
    try {
        const resp = await authFetch.get("/products")
        setProductData(resp.data)
    } catch (error) {
        ToastError(error)
    }
  }
      
  useEffect(() => {
    GetProductData()
  },[])
  return(
      <>
      {!productData?<><div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <Title txt="Loading..." size={25} transform="uppercase" /></div></>:
        <section className={styles.home}>
        <div className={styles.container}>
          <div className={styles.row}>
            {productData && (
              <div className={styles.title}>
                <Title txt="all products" color="#171717" size={22} transform="uppercase" />
              </div>
            )}
          </div>
          <div className={styles.row}>
              {productData.map((product, key) => <Card product={product} key={key} />)}
          </div>
        </div>
      </section>}
      </>
  )
};

export default Home;
