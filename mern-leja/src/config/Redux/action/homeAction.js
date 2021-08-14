import Axios from "axios"

export const setDataBlog = (page) => (dispatch) => {
  Axios.get(
    `https://mernleja.herokuapp.com/v1/blog/posts?page=${page}&perPage=6`
  )
    .then((result) => {
      // console.log("data API", result.data);
      const responseAPI = result.data
      console.log("data API = ", responseAPI)
      console.log("total data = ", responseAPI.total_data)
      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data })
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          currentPage: parseInt(responseAPI.current_page),
          totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page),
        },
      })
    })
    .catch((err) => {
      console.log("error: ", err)
    })
}
