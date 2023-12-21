import React, { useState } from "react";
import "./inputList.css"

const initialList = [
  {
    id: 1,
    text: "",
  },
  {
    id: 2,
    text: "",
  },
];

const InputList = () => {
  const [inputList, setInputList] = useState(initialList);
  const [id, setId] = useState(3);

  const handleAdd = () => {
    setInputList((state) => {
      return [...state, { id: id, text: "" }];
    });
    setId(id + 1);
  };

  const handleRun = (objId) => {
    inputList.forEach((list) => {
      if (list.id === objId) {
        alert(list.text);
      }
    });
    // setInputList((state)=> {
    //     return(
    //         state.map((list)=>{
    //             if(list.id === objId){
    //                 list.text= ""
    //             }
    //             return list
    //         })
    //     )

    // })
  };

  const handleInputChange = (value, objId) => {
    setInputList((state) => {
      return state.map((list, ind) => {
        if (list.id === objId) {
          list.text = value;
        }
        return list;
      });
    });
    console.log(inputList);
  };

  return (
    <div className="main-cont">
      <div className="container">
        {inputList.map((obj, i) => {
          return (
            <div className="inputList">
              <input
                className="input"
                type="text"
                onChange={(e) => {
                  handleInputChange(e.target.value, obj.id);
                }}
                value={obj.text}
              />
              <button
              className="runBtn"
                onClick={() => {
                  handleRun(obj.id);
                }}
              >
                Run
              </button>
            </div>
          );
        })}

        <button className="addBtn" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default InputList;
