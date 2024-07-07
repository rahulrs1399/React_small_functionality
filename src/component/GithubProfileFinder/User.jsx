import "./style.css"

export default function User({user}){

    const {avatar_url, followers, following, public_repos, name, login} = user;
    return (
    <div className="user">
        <div>
            <img src={avatar_url} className="avatar" alt="User" />
        </div>
        <div>
            <a href={`https://github.com/${login}`}>{name || login}</a>
        </div>
        <div>
            <p>Followers :{followers}</p>
            <p>Following: {following}</p>
        </div>
    </div>
    )
}