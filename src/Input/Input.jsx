import {useRef} from "react";

const Input = () => {
    const ref = useRef(null)
    const focusInput = () => {
        ref.current.focus()
    }
    return (
        <div className='wrapper'>
            <input ref={ref} type="text"/>
            <button onClick={focusInput}>Focus</button>
        </div>
    )
}
export default Input