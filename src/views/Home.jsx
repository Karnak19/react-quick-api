import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Spinner } from "reactstrap";
import UserCard from "../UserCard";
import UserForm from "../UserForm";
import { UserContext } from "../context/users";

function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await axios.get("http://localhost:4545/users");
        setUsers(users.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <UserContext.Provider value={{ users, addUser }}>
      <Row className="mb-5">
        <UserForm />
      </Row>
      <Row>
        {error && (
          <Col>
            <p>{error.message}</p>
          </Col>
        )}
        {users.map((user) => {
          return <UserCard id={user.id} pseudo={user.pseudo} key={user.id} />;
        })}
      </Row>
    </UserContext.Provider>
  );
}

export default Home;
