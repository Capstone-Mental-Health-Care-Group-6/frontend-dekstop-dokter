import { axiosInterceptor } from "./axiosInterceptors";

export const createArticle = async (formArticle, callback) => {
  await axiosInterceptor
    .post(`/articles`, formArticle, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err.message);
    });
};

export const getAllArticle = (callback) => {
  axiosInterceptor
    .get("/articles")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllArticleCategories = (callback) => {
  axiosInterceptor
    .get("/article/categories")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
