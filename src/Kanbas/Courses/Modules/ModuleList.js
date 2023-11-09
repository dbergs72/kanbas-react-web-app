import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RxDragHandleDots2 } from "react-icons/rx";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  const handleAddModule = async () => {
    await client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = async (moduleId) => {
    await client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  return (
    <div>
      <ul className={"list-group"} style={{ width: 400, textAlign: "right" }}>
        <li className={"list-group-item d-flex"}>
          <div className={"flex-grow-1"}>
            <input
              type="text"
              className={"form-control"}
              value={module.name}
              onChange={(e) =>
                dispatch(
                  setModule({
                    ...module,
                    name: e.target.value,
                  }),
                )
              }
            />
            <textarea
              className={"form-control mt-2"}
              value={module.description}
              onChange={(e) =>
                dispatch(
                  setModule({
                    ...module,
                    description: e.target.value,
                  }),
                )
              }
              rows={2}
            />
          </div>
          <div className={"ms-2"}>
            <button
              className={"btn btn-success"}
              onClick={() => {
                handleAddModule();
              }}
            >
              Add
            </button>
            <br />
            <button
              className={"btn btn-light mt-2"}
              onClick={() => {
                handleUpdateModule();
              }}
            >
              Update
            </button>
          </div>
        </li>
      </ul>
      <ul className={"ps-2 mt-2"}>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className={"p-2 d-flex align-items-center mb-5 wd-module"}
              style={{ borderRadius: 0 }}
            >
              <RxDragHandleDots2 size={20} />
              <div className={"ps-3"}>
                <h5>{module.name}</h5>
                {module.description}
              </div>
              <div className="flex-grow-1 text-end ">
                <div className={"d-flex justify-content-end"}>
                  <button
                    className={"btn btn-light me-2"}
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                  <button
                    className={"btn btn-danger"}
                    onClick={() => handleDeleteModule(module._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ModuleList;
