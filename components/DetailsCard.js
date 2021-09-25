import useStore from "../store";

const DetailsCard = () => {
  const userData = useStore((state) => state.userData);
  return (
    <div className="rounded-xl h-4/6 w-3/6 bg-white drop-shadow-lg p-8 text-justify">
      <a href={userData.avatar_url} target="_blank">
        <img
          src={userData.avatar_url}
          alt="profile pic"
          className="h-16 w-16"
        />
      </a>
      <br />
      <table className="text-lg">
        <tr className="border-b-2">
          <th>Username:</th>
          <td>{userData.login}</td>
        </tr>

        {userData.name && (
          <tr className="border-b-2">
            <th>Full Name:</th>
            <td>{userData.name}</td>
          </tr>
        )}

        {userData.bio && (
          <tr className="border-b-2">
            <th>Bio:</th>
            <td>{userData.bio}</td>
          </tr>
        )}

        <tr className="border-b-2">
          <th>Public Repos:</th>
          <td>{userData.public_repos}</td>
        </tr>

        <tr className="border-b-2">
          <th>Public Gists:</th>
          <td>{userData.public_gists}</td>
        </tr>

        <tr className="border-b-2">
          <th>Followers:</th>
          <td>{userData.followers}</td>
        </tr>

        <tr className="border-b-2">
          <th>Following:</th>
          <td>{userData.following}</td>
        </tr>

        {userData.company && (
          <tr className="border-b-2">
            <th>Company:</th>
            <td>{userData.company}</td>
          </tr>
        )}

        {userData.blog && (
          <tr className="border-b-2">
            <th>Blog/Website:</th>
            <td>{userData.blog}</td>
          </tr>
        )}

        {userData.location && (
          <tr className="border-b-2">
            <th>Location:</th>
            <td>{userData.location}</td>
          </tr>
        )}

        {userData.email && (
          <tr className="border-b-2">
            <th>Email:</th>
            <td>{userData.email}</td>
          </tr>
        )}

        {userData.hireable && (
          <tr className="border-b-2">
            <th>Hireable:</th>
            <td>{userData.hireable}</td>
          </tr>
        )}

        {userData.twitter_username && (
          <tr className="border-b-2">
            <th>Twitter:</th>
            <td>
              <a
                href={"https://twitter.com/" + userData.twitter_username}
                target="_blank"
                className="text-blue-500"
              >
                @{userData.twitter_username}
              </a>
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default DetailsCard;
