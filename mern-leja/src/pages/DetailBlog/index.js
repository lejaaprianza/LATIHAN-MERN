import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
// import { RegisterBg } from "../../assets";
import { Gap, Link } from "../../components";
import "./detailBlog.scss";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  const [author, setAuthor] = useState({});
  useEffect(() => {
    // console.log("hasil params: ", props.match.params.id);
    const id = props.match.params.id;
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        console.log("berhasil: ", res);
        setData(res.data.data);
        setAuthor(res.data.data.author.name);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img
        className="img-cover"
        src={`http://localhost:4000/${data.image}`}
        alt="thumb"
      />
      <p className="blog-title">{data.title}</p>
      <p className="blog-author">
        {author.toString()}- {data.createdAt}
      </p>
      <p className="blog-body ">{data.body}</p>
      <Gap height={20} />
      <Link title="Kembali ke Blog" onClick={() => history.push("/")} />
    </div>
  );
};

export default withRouter(DetailBlog);
