import style from "./style.module.css"
function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.navigation}>
                <div className={style.icon_navigation}>
                    <p>Home</p>
                    <p>Textbook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>
                <div className={style.students_name}>
                    <p>Alex</p>
                    <p>Gabriel</p>
                    <p>Marcus</p>
                </div>
            </div>
            <hr></hr>
            <div className={style.href}>
                <div className={style.icon_href}>
                    <div className={style.img_face}></div>
                    <div className={style.img_litters}></div>
                    <div className={style.img_youtube}></div>
                </div>
                <div className={style.builHSC}>
                    <p>©2021 Hschool. Project for <span>Hschool.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer