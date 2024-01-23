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

            <div className={style.learnContent}>
                <div className={style.learnImg}></div>
                <div className={style.learnInfo}>
                    <h1>Learn a language in a playful way</h1>
                    <p className={style.textLearning}>Make learning programming languages more fun with mini-games</p>
                    <div className={style.statistic}>
                        <div className={style.ImgSneakers}></div>
                        <div className={style.ImgSound}></div>
                    </div>
                </div>
            </div>

            <div className={style.knowledgeContent}>
                <div className={style.knowledgeInfo}>
                    <h1>Increase your knowledge</h1>
                    <p className={style.textknowledge}>Traditional and new effective approaches to learning languages</p>
                    <div className={style.btn_textbook}></div>
                </div>
                <div className={style.knowledgeImg}></div>
            </div>
        </div>

    )
}

export default Preview