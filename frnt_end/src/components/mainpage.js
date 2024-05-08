import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./mainpage.css";

function Main() {
  const [activity, setActivity] = useState([]);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const data = { token: JSON.parse(localStorage.getItem("token")) };
  useEffect(() => {
    if (data.token) {
      try {
        axios
          .post("http://localhost:5000/api/todo/all", data)
          .then((res) => {
            if (res.data.status) {
              localStorage.setItem("activities", JSON.stringify(res.data.data));
              setActivity(res.data.data);
            } else {
              window.alert(res.data.messsage);
            }
          })
          .catch((err) => window.alert(err.response.data.message));
      } catch (e) {
        window.alert(e.message);
      }
    } else {
      navigate("/");
    }
  }, []);

  const onSubmit = (task) => {
    const data = {
      token: JSON.parse(localStorage.getItem("token")),
      activity: task.todoAddTask,
    };
    try {
      axios
        .post("http://localhost:5000/api/todo/add", data)
        .then((res) => {
          if (res.data.status) {
            localStorage.setItem("activities", JSON.stringify(res.data.data));
            setActivity(res.data.data);
            alert(res.data.messsage);
          } else {
            window.alert(res.data.messsage);
          }
        })
        .catch((err) => window.alert(err.message));
    } catch (e) {
      window.alert(e.message);
    }
  };
  return (
    <>
      <div className="todoMain">
        <div className="todoTop">
          <h1 className="todoUser">
            {JSON.parse(localStorage.getItem("user"))}{" "}
          </h1>
        </div>
        <div className="todoSide">
          <center>
            {" "}
            <div className="todoTxt">
              <p className="todoTxtList">To Do List</p>
              <p className="todoTxtHistory">Hisotory</p>
            </div>
          </center>
          <center>
            <div
              className="todoLogout"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </div>
          </center>
        </div>
        <div className="todoAddTask">
          <form onSubmit={handleSubmit(onSubmit)} className="todoAddTaskForm">
            <input
              className="todoAddTaskInput"
              {...register("todoAddTask")}
              type="text"
              placeholder="Add Task"
            />
            <button className="todoButton" type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className="todoDisplayTask">
          <div className="todoHeading">
            <div className="tableHeading">Activity</div>
            <div className="tableHeading">Status</div>
            <div className="tableHeading">Time Taken</div>
            <div className="tableHeading">Action</div>
          </div>
          <table className="table">
            <tbody>
              {activity &&
                activity.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td className="tableHeading">{items.activity}</td>
                      <td className="tableHeading">{items.status}</td>
                      <td className="tableHeading"></td>
                      <td className="tableHeading"></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Main;
