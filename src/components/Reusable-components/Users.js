import { useState, useEffect } from "react";

import React from "react";
import Slider from "react-slick";

export default function Users() {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=1")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //       console.log(data);
  //     });
  // }, []);

  // return <></>;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      setData(results);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map(
        (user, index) => (
          (<img src={user.picture.large} alt='customer' />),
          (<h3 key={index}>{user.name.first}</h3>)
        )
      )}
    </>
  );
}
