import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Alert, Row, Spinner } from "reactstrap";

import UserCard from "../UserCard";

function User() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await axios.get(`http://localhost:4545/users/${id}`);
        setUser(user.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">{error.message}</Alert>;
  }
  return (
    <Row>
      <UserCard id={user.id} pseudo={user.pseudo} />
    </Row>
  );
}

export default User;
