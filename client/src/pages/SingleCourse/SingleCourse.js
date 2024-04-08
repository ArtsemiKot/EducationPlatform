import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './style.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
function SingleCourse() {
    const { id } = useParams()

    const [languages, setLanguages] = useState([{}])
    const [lesson, setLesson] = useState([{}])

    async function getLenguagesbyId() {
        const response = await axios.get(`http://localhost:3001/course/${id}`)
        setLanguages(response.data)
    }
    async function getLessonbyId() {
        const response = await axios.get(`http://localhost:3001/lesson/${id}`)
        setLesson(response.data)
    }

    useEffect(() => {
        getLenguagesbyId()
        getLessonbyId()
    }, [])

    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.wrapperCourses}>
                    <div className={style.singleCourse}>
                        <div className={style.img}></div>
                        <div className={style.infoCourse}>
                            <h2>{languages[0].course}</h2>
                            <p>{languages[0].description}</p>
                        </div>
                    </div>
                    <button>Go to course</button>
                </div>
                <div className={style.wrapperLessons}>
                    <h2>{lesson.length} lesson</h2>
                    <ol>
                        {lesson.map((el)=>{
                            return <li>{el.title}</li>
                        })}
                    </ol>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default SingleCourse;