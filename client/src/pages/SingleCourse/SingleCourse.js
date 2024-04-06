import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './style.module.css'
function SingleCourse() {
    const languages = [
        {
            id: 1,
            course: 'JavaScript',
            description: `JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.`,
            img: style.img1
        },
        {
            id: 2,
            course: 'TypeScript',
            description: `TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules.`,
            img: style.img2
        },
        {
            id: 3,
            course: 'Python',
            description: `Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.`,
            img: style.img3
        },
    ]
    const { id } = useParams()
    const result = languages.filter(el => el.id === +id)
    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.singleCourse}>
                    <div className={style.img}></div>
                    <div className={style.infoCourse}>
                        <h2>{result[0].course}</h2>
                        <p>{result[0].description}</p>
                    </div>
                </div>
                <div className={style.wrapperLessons}>
                    <h2>15 lessons</h2>
                    <ol>
                        <li>1.Test</li>
                        <li>2.Test</li>
                        <li>3.Test</li>
                        <li>4.Test</li>
                        <li>5.Test</li>
                    </ol>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default SingleCourse;