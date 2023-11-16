import { NavLink } from "react-router-dom";

export const NewPostBar = () => {
    return (
        <div>
            <NavLink to="/posts/new">
                <button>создать пост</button>
            </NavLink>
        </div>
    );
};
