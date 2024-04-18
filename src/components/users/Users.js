import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { removeFromUsers } from "../../context/usersSlice";
import { editUsers } from "../../context/usersSlice";

function Users({ data }) {
  const [toggle, settoggle] = useState(false);
  const [edit, setEdit] = useState("");
  const [eAge, setAge] = useState("");
  let newUser = {
    name: edit,
    age: eAge,
  };
  console.log(edit, eAge);
  const dispatch = useDispatch();
  const istoggle = () => {
    settoggle(!toggle);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  function pushUsers() {
    localStorage.setItem("newUsers", JSON.stringify(newUser));
    dispatch(editUsers(newUser));
    settoggle(false);
  }
  return (
    <div className="users__wrapper">
      {data?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={user.gender === "male" ? male : female} alt="" />
          <h2>{localStorage.getItem("newUsers") ? newUser.name : user.name}</h2>
          <p>{user.profession}</p>
          <p>
            {localStorage.getItem("newUsers") ? newUser.age : user.age} years
            old
          </p>
          <button onClick={() => dispatch(removeFromUsers(user))}>
            Remove
          </button>
          <button
            className="btn5"
            onClick={() => {
              istoggle();
            }}
          >
            Edit
          </button>
          <div className={`${toggle ? "show" : "close"}`}>
            <form onSubmit={handleSubmit} action="">
              <h3>Name</h3>
              <input
                type="text"
                value={edit}
                onChange={(e) => setEdit(e.target.value)}
              />
              <h3>Age</h3>
              <input
                type="number"
                value={eAge}
                onChange={(e) => setAge(e.target.value)}
              />
              <button className="btn6" onClick={pushUsers}>
                Edit
              </button>
              <button className="btn7" onClick={() => settoggle(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
