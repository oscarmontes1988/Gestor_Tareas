import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <div>
            <link to='/tasks'>
            <h1>Task App</h1>
            </link>
            <Link to="/tasks-create">create task</Link>
        </div>
    )
}