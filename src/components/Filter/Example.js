import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Example = () => {
  const[users, setUsers] = useState([]);
  const[selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);
  // here you can see checked data
  // all checked data are there in selectedUser
  // console.log(selectedUser);

  const userData = [
    { id: 1, name: "rag", email: "rag@gmail.com" },
    { id: 2, name: "abc", email: "abc@gmail.com" },
    { id: 3, name: "xyz", email: "xyz@gmail.com" },
    { id: 4, name: "pqr", email: "pqr@gmail.com" },
  ];
  

  const handleChange = (e, data) => {
    const { name, checked } = e.target;
    if (checked) {
      // if cheked and selectall checkbox add all fileds to selectedList
      if (name === "allSelect") {
        setSelectedUser(users);
      } else {
        // if cheked and specific checkbox add specific field to selectedList
        setSelectedUser([...selectedUser, data]);
      }
    } else {
      // if uncheked and selectall checkbox add remove all fileds from selectedList
      if (name === "allSelect") {
        setSelectedUser([]);
      } else {
        // if uncheked and specific checkbox remove specific field from selectedList
        let tempuser = selectedUser.filter((item) => item.id !== data.id);
        setSelectedUser(tempuser);
      }
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              className="form-check-input"
              name="allSelect"
              // allSelect selected when both length equal
              // slecteduser === allUser
              checked={selectedUser?.length === users?.length}
              onChange={(e) => handleChange(e, users)}
            />
          </th>
          <th>First Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((data, index) => (
            <tr id={index} key={index}>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  name={data.name}
                  // checked when selectedUser contains checked object/filed/row
                  checked={selectedUser.some((item) => item?.id === data.id)}
                  onChange={(e) => handleChange(e, data)}
                />
              </td>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default Example;
