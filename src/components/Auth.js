import { Link } from  "react-router-dom"

export const Auth  = () => {
    return <ul>
        <li>
            <Link to= "/register">register</Link></li>
        <li><Link to= "/login">login</Link></li>
    </ul>
}