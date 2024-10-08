import axios from "axios";
import React, { useEffect } from "react";

const GetMethod = () => {
  // async function getApi() {
  //   const url = "https://jsonplaceholder.typicode.com/todos/1";

  //   await fetch(url, {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }

  // async function deleteApi() {
  //   const url = "https://jsonplaceholder.typicode.com/todos/1";

  //   await fetch(url, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }

  // const myData = {
  //   userId: 1,
  //   name: "kavin",
  //   age: 24,
  // };
  // async function postApi() {
  //   const url = "https://jsonplaceholder.typicode.com/posts";

  //   await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(myData),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }

  // async function putApi() {
  //   const url = "https://jsonplaceholder.typicode.com/todos/1";

  //   await fetch(url, {
  //     method: "PUT",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }

  // promise using then

  // const gettingApi = async () => {
  //   const res = await axios
  //     .get("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((res) => console.log(res.data))
  //     .catch((e) => console.log(e));
  // };

  // gettingApi();

  async function getApi() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteApi() {
    try {
      const response = await axios({
        method: "DELETE",
        url: "https://jsonplaceholder.typicode.com/todos/1",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function postApi() {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          data: {
            userId: 1,
            name: "kavin",
            age: 24,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function putApi() {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getApi();
    deleteApi();
    postApi();
    putApi();
  }, []);
  return <div></div>;
};

export default GetMethod;
