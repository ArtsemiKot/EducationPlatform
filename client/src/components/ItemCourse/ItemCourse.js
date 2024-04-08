import { useEffect, useRef, useState } from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Pagination from "@mui/material/Pagination";

function ItemCourse() {

    const [languages, setLanguages] = useState([{}])
    async function getLanguages() {
        const response = await axios.get('http://localhost:3001/course')
        setLanguages(response.data);
    }
    const [page, setPage] = useState(1)
    const countPage = useRef(3)

    const end = page * countPage.current;
    const start = end - countPage.current;
    const stand = languages.slice(start, end);

    useEffect(() => {
        getLanguages()
    }, [])
    return (
        <div>
            <div className={style.allcontent}>
                {stand.map((el, index) =>
                    <Link to={`/${el.id}`}>
                        <div key={index} className={style.content}>
                            <div className={style.img1}></div>
                            <div className={style.info}>
                                <h2>{el.course}</h2>
                                <hr></hr>
                                <p>{el.description}</p>
                            </div>
                        </div>
                    </Link>
                )}
                <Pagination
                    count={Math.ceil(languages.length / countPage.current)}
                    size="large"
                    onChange={(e, value) => setPage(value)}
                />
            </div>
        </div>
    )
}

export default ItemCourse;