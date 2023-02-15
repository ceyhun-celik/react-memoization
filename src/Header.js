import { memo } from "react"

function Header() {
    console.log('Header rendered')
    return (
        <header>
            <h1>Todo App</h1>
        </header>
    )
}

export default memo(Header)