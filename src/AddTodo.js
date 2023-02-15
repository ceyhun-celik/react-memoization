import { memo } from "react"

function AddTodo({ submitHandle, InputHandle, todo }) {
    console.log('ADD_TODO rendered')

    return (
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={InputHandle} />
            <button disabled={!todo} type="submit">Ekle</button>
        </form>
    )
}

export default memo(AddTodo)