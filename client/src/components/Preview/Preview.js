import style from './style.module.css'
function Preview() {
    return (

        <div className={style.wrapper}>
            <div className={style.previewContent}>
                <div className={style.previewInfo}>
                    <p className={style.textPlatform}>E-COURSE PLATFORM</p>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p className={style.textAdditional}>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.btn}>About platform</div>
                    <div className={style.statistic}>
                        <div className={style.ImgLightning}></div>
                        <p className={style.studentCount}>600 <span>+</span></p>
                    </div>
                    <p className={style.textStudents}></p>
                </div>
                <div className={style.previewImg}>
                </div>
            </div>




            <div className={style.learnContent}></div>
            <div className={style.knowledgeContent}></div>
            <div className={style.progressContent}></div>
        </div>

    )
}

export default Preview