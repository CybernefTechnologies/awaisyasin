import React, { useEffect, useState } from "react";
import "../styles/card.scss";

import { getRandomUser } from "../networks/network";
// import CircularProgress from '@mui/material/CircularProgress';

const Caard = () => {
  const [user, setUser] = useState();

  useEffect(async () => {
    // const data = ;
    console.log("first use Effect");
    const res = await getRandomUser();
    setUser(res);
  }, []);
  console.log("user", user);
  return (
    <div>
      {user ? (
        <div className="card_container">
          <div className="card">
            <div className="top_img">
              <img src={user.picture.large} alt="" />
            </div>
            <div className="profile_main">
              <div className="avatar_container">
                <div className="avatar">
                  {user.picture.large && (
                    <img src={user.picture.large} alt="" />
                  )}
                </div>
              </div>

              <div className="profile_information">
                <div className="profile_identity">
                  <h2 className="username">{`${user.name.first} ${user.name.last}`}</h2>
                  {/* <span className="age">{user.dob.age}</span> */}
                </div>

                <div className="location">{user.location.country}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Caard;
