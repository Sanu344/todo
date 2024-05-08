import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./mainpage.css";

function Main() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (task) => {
    console.log(task.todoAddTask);
  };

  let arr = [1, 2, 2, 3];
  return (
    <>
      <div className="todoMain">
        <div className="todoTop">
          <h1 className="todoUser">Main Page </h1>
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
              {arr.map((items, index) => {
                return (
                  <tr key={index}>
                    <td className="tableHeading">{items}</td>
                    <td className="tableHeading">{items}</td>
                    <td className="tableHeading">{items}</td>
                    <td className="tableHeading">{items}</td>
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
