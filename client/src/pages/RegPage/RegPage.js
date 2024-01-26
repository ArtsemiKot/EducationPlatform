import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './style.module.css'

function RegPage(){
    return (
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.reg}>
                    <h1>Sign up</h1>
                    <div><input placeholder="Placeholder text"></input></div>
                    <div><input placeholder="Placeholder text"></input></div>
                    <div><input placeholder="Placeholder text"></input></div>
                    <div><input placeholder="Placeholder text"></input></div>
                    <button className={style.btn}>Sign up</button>
                </div>
                <div className={style.regImg}></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RegPage;