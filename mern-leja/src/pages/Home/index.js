import React, { useEffect, useState } from "react"
import { BlogItem, Button, Gap } from "../../components"
import "./home.scss"
import { useHistory } from "react-router-dom"
// import Axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { setDataBlog } from "../../config/Redux/action"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import axios from "axios"
const Home = () => {
  // const [dataBlog, setDataBlog] = useState([]);
  const [counter, setCounter] = useState(1)
  const { dataBlog, page } = useSelector((state) => state.HomeReducer)
  //   const { dataBlog, name } = useSelector((state) => state);
  console.log("page: ", page)
  const dispatch = useDispatch()
  //   console.log("state global", dataBlog);
  //   console.log(name);
  useEffect(() => {
    dispatch(setDataBlog(counter)) // setTimeout(() => {
    //   dispatch({ type: "UPDATE_NAME" });
    // }, 10000);
  }, [counter, dispatch])

  const history = useHistory()

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
    console.log(counter)
  }
  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            axios
              .delete(`https://mernleja.herokuapp.com/v1/blog/post/${id}`)
              .then((res) => {
                console.log("done ", res.data)
                window.location.reload()
              })
              .catch((err) => {
                console.log("err ", err)
              }),
        },
        {
          label: "No",
          onClick: () => alert("tidak setuju"),
        },
      ],
    })
  }

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
    // setCounter(counter + 1);
    console.log(counter)
  }
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() =>
            setTimeout(() => {
              history.push("/create-blog")
              window.location.reload()
            }, 100)
          }
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              //   image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              name={blog.author.name}
              body={blog.body}
              date={blog.createdAt}
              _id={blog._id}
              onDelete={confirmDelete}
            />
          )
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {counter}/{page.totalPage}{" "}
        </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home
