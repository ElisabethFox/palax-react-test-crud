import User from "./User";

const AppCard = () => {
    return (
        <div className="card">
            <div className="users__container">
                <ul className="users__list">
                <User />
                </ul>
            </div>

            <div className="post__container">

            </div>
        </div>
    );
}
 
export default AppCard;