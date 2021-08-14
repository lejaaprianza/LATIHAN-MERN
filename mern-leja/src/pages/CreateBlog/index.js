// import React, { useState } from "react";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import "./createBlog.scss";
import { useHistory, withRouter } from "react-router-dom";
// import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  postToAPI,
  setForm,
  setImgPreview,
  updateToAPI,
} from "../../config/Redux/action/createBlogAction";
import { useEffect, useState } from "react";
import axios from "axios";

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  // const { title, body, image } = form;
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [image, setImage] = useState("");
  // const [imagePreview, setImagePreview] = useState(null);
  const history = useHistory();
  useEffect(() => {
    console.log("params: ", props);
    const id = props.match.params.id;

    if (id) {
      setIsUpdate(true);
      axios
        .get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          console.log("res: ", data);
          // console.log(data.image.replace("\\", "/"));
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    }
  }, [props, dispatch]);

  const onSubmit = () => {
    const id = props.match.params.id;
    if (isUpdate) {
      updateToAPI(form, id);
      console.log("update");
    } else {
      postToAPI(form);
      console.log("create");
    }
    setTimeout(() => {
      history.goBack("/");
    }, 100);
    // console.log(title);
    // console.log(body);
    // console.log(image);
  };
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => history.push("/")} />
      <p className="title">
        {isUpdate ? "Update blog post" : "Save blog post"}
      </p>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={20} />
      <div className="button-action">
        <Button title={isUpdate ? "Update" : "Simpan"} onClick={onSubmit} />
        <Gap height={20} />
      </div>
    </div>
  );
};

export default withRouter(CreateBlog);
