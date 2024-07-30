import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {


  const [user, setUser] = useState({});
  const username = useParams().username;
  // console.log(params);


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:8000/api/users?username=${username}`);
      setUser(res.data);
   

    }
    fetchUsers();
  }
    , [username]);


    const PF = "http://localhost:8000/images/";
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture? PF + user.coverPicture : PF + "person/download.jfif"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={ user.profilePicture ? PF + user.profilePicture : PF + "person/download.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            {/* {console.log(user)}  */}
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
