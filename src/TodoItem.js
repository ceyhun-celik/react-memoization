import { memo } from "react"

function TodoItem({ todo }) {
    console.log('TODO_ITEM rendered', todo)

    return (
        <li>{todo}</li>
    )
}

export default memo(TodoItem)