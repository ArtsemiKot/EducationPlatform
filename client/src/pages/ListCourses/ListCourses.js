import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './style.module.css'

function ListCourses() {
    return (
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.courses}>
                    <div className={style.hat}></div>
                    <h3>Courses</h3>
                </div>
                <div className={style.allcontent}>
                    <div className={style.contentJS}>
                        <div className={style.imgJS}></div>
                        <div className={style.infoJS}>
                            <h2>JavaScript</h2>
                            <hr></hr>
                            <p>JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.</p>
                        </div>
                    </div>
                    <div className={style.contentTS}>
                        <div className={style.imgTS}></div>
                        <div className={style.infoTS}>
                            <h2>TypeScript</h2>
                            <hr></hr>
                            <p>TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules.</p>
                        </div>
                    </div>
                    <div className={style.contentPyt}>
                        <div className={style.imgPyt}></div>
                        <div className={style.infoPyt}>
                            <h2>Python</h2>
                            <hr></hr>
                            <p>Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ListCourses;