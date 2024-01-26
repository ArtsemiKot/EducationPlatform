import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './style.module.css';
function AuthPage() {
    return (
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.auth}>
                    <h1>Login</h1>
                    <div><input placeholder="Placeholder text"></input></div>
                    <div><input placeholder="Placeholder text"></input></div>
                    <button className={style.btn}>Login</button>
                </div>
                <div className={style.authImg}></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AuthPage;