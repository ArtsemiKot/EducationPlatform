import style from './style.module.css'
import {Link} from 'react-router-dom'
function ItemCourse() {
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
    return (
        <div>
            <div className={style.allcontent}>
                {languages.map((el, index) =>
                    <Link to={`/${el.id}`}>
                        <div key={index} className={style.content}>
                            <div className={el.img}></div>
                            <div className={style.info}>
                                <h2>{el.course}</h2>
                                <hr></hr>
                                <p>{el.description}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default ItemCourse;