import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './style.module.css';
import Input from "../../components/Input/Input";

function AuthPage() {
    const inputArray = [
        {
            id: 1,
            placeholderValue: 'Enter Email...',
            inputType: 'text'
        },
        {
            id: 2,
            placeholderValue: 'Enter Password...',
            inputType: 'password'
        },
    ]
    return (
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.auth}>
                    <h1>Login</h1>
                    {inputArray.map((el) => <Input el={el}></Input>)}
                    <button className={style.btn}>Login</button>
                </div>
                <div className={style.authImg}></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AuthPage;