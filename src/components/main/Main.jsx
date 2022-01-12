import React from 'react';
import style from './Main.module.css'
// -----------------------------imagenes-----------------------------
import pizza from "../../assets/images/pizza.svg"
import boton1 from "../../assets/images/btn_der.svg"
import boton2 from "../../assets/images/btn_izqu.svg"
import Carousel from '../carousel/Carousel';

const Main = () => {
    return (
        <div className={ style.mani}>
            <h1 className={style.titulo}> Mundo Pizza  </h1>            
            <img src={pizza} alt=""  className={style.pizza}/>
            <div className={style.pedidos}>  
{/* -----------------------------------------------------boton derecho----------------------------------------------------- */}
                <div className={style.botonDer}>                   
                        <button className={style.boto1}>
                            <img src={boton2} alt="" className={style.boto1Img}/>
                        </button>
                </div>
{/* -----------------------------------------------------barrido----------------------------------------------------- */}    
                <Carousel /> 
{/* -----------------------------------------------------boton derecho----------------------------------------------------- */}    
                <div className={style.botonDer}>                   
                    <button className={style.boto1}>
                        <img src={boton1} alt="" className={style.boto1Img}/>
                    </button>
                </div>
            </div>
            <button>!Ordenar ahora!</button>
        </div>
    );
}

export default Main;
