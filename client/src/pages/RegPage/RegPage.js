import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import style from './style.module.css'
import { useState } from "react";
import axios from 'axios'

function RegPage() {
    const [data, setData] = useState({})
    async function clickButton() {
        const response = await axios.post("http://localhost:3001/api/reg", data, {
            withCredentials: true,
        })
        console.log(response);
    }
    const inputArray = [
        {
            id: 1,
            placeholderValue: 'Enter Name...',
            inputType: 'text',
            name: 'name'
        },
        {
            id: 2,
            placeholderValue: 'Enter Surname...',
            inputType: 'text',
            name: 'surname'
        },
        {
            id: 3,
            placeholderValue: 'Enter Email...',
            inputType: 'text',
            name: 'email'
        },
        {
            id: 4,
            placeholderValue: 'Enter Password...',
            inputType: 'password',
            name: 'pwd'
        },
        {
            id: 5,
            placeholderValue: 'Enter ConfirmPassword...',
            inputType: 'password',
            name: 'confirmpwd'
        },
    ]

    return (
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.reg}>
                    <h1>Sign up</h1>
                    {inputArray.map((el) => <Input setData={setData} data={data} el={el}></Input>)}
                    <div onClick={clickButton} className={style.btn}><Link to={'/courses'}>Sign up</Link></div>
                </div>
                <div className={style.regImg}></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RegPage;