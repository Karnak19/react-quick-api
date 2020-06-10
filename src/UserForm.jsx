import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

import { UserContext } from "./context/users";

function UserForm(props) {
  const [datas, setDatas] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { addUser } = useContext(UserContext);

  const handleChange = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const user = await axios.post(
        "http://localhost:4545/users",
        { ...datas },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      addUser(user.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setDatas({ pseudo: "" });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="pseudo">Pseudo</Label>
        <Input type="text" name="pseudo" id="pseudo" value={datas.name} onChange={handleChange} />
      </FormGroup>

      <Button block color="success" disabled={loading} type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;
