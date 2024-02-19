import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import style from './style.module.css'

function RegPage() {
    const inputArray = [
        {
            id: 1,
            placeholderValue: 'Enter Name...',
            inputType: 'text'
        },
        {
            id: 2,
            placeholderValue: 'Enter Surname...',
            inputType: 'text'
        },
        {
            id: 3,
            placeholderValue: 'Enter Email...',
            inputType: 'text'
        },
        {
            id: 4,
            placeholderValue: 'Enter Password...',
            inputType: 'password'
        },
        {
            id: 5,
            placeholderValue: 'Enter ConfirmPassword...',
            inputType: 'password'
        },
    ]
    
    return (
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.reg}>
                    <h1>Sign up</h1>
                    {inputArray.map((el) => <Input el={el}></Input>)}
                    <button className={style.btn}>Sign up</button>
                </div>
                <div className={style.regImg}></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RegPage;