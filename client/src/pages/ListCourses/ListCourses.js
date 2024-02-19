import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemCourse from "../../components/ItemCourse/ItemCourse";
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
                <ItemCourse></ItemCourse>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ListCourses;