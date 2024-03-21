function Input({el, setData, data}) {
    function changeState(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div><input onChange={changeState} name={el.name} data = {data} type={el.inputType} placeholder={el.placeholderValue}></input></div>
        </>
    )
}

export default Input;