import React, { useState } from "react";
function TodoList() {
  const [fvalue, setFvalue] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (event) => {
    setFvalue(event.target.value);
  };
  const handleClick = () => {
    const a = [...data,{name:fvalue, id:data.length}];
    setData(a);
    localStorage.setItem("data",a);
    localStorage.getItem("data");
  };
  const removeFunction = (removeItem) => {
    const newData = data.filter((item
      )=>item!==removeItem)
    localStorage.removeItem("data", newData);
   // data.pop();
    setData(newData);
  };
  console.log(data, "data");
  return (
    <>
      <div className="input">
        <label className="input_label"> Item:</label>
        <input
          className="input_field"
          value={fvalue.name}
          onChange={handleChange}
          type="text"
        />
        <button className="add_button" onClick={handleClick}>
          Add
        </button>
        {/* <button className="del_button" onClick={removeFunction}>
          Delete
        </button> */}
      </div>
      {/* <></> */}
      <div className="data_value">
        {data.map((item,idx) => {
          return (
            <>
              {item.name}
              <button key={idx} className="del_button" onClick={()=>removeFunction(item)}>
                Delete
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}
export default TodoList;
