import React, { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "@firebase/auth";
import axios from "axios";
import { API } from "../Helpers";

export const newsContext = createContext();

const NEWS_STATE = {
  news: [],
  edit: null,
  cart: {},
};

const reducer = (state = NEWS_STATE, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        news: action.payload.data,
        paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 1),
      };
    case "EDIT_NEWS":
      return { ...state, edit: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const ContextMy = (props) => {
  const [state, dispatch] = useReducer(reducer, NEWS_STATE);
console.log(props, "12313");
  //! add news
  const addNews = async (latestNews) => {
    console.log(latestNews);
    try {
      await axios.post(API, latestNews);
      getNews();
    } catch (error) {
      console.log(error);
    }
  };

  const getNews = async () => {
    try {
      let res = await axios(`${API}/${window.location.search}`);
      let action = {
        type: "GET_NEWS",
        payload: res,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
      // ! Error
    }
  };
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        news: [],
      };
    }
    console.log(cart, "cartt");

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const addCartNews = (news) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        news: [],
      };
    }
    let newProduct = {
      item: news,
      count: 1,
    };
    let filteredCard = cart.tikets.filter((elem) => elem.item.id === news.id);
    if (filteredCard.length > 0) {
      cart.news = cart.news.filter((elem) => elem.item.id === news.id);
    } else {
      cart.news.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.news.length,
    });
  };
  //!EDIT NEWS
  const editNews = async (id) => {
    try {
      let { data } = await axios(`${API}/${id}`);
      let action = {
        type: "EDIT_NEWS",
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  // ! save
  const saveEditNews = async (editedNews) => {
    try {
      await axios.patch(`${API}/${editedNews.id}`, editedNews);
      getNews();
    } catch (error) {}
  };

  // ! delete
  const deleteNews = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getNews();
    } catch (error) {}
  };

  const getCartLength = () => {
    let cart = JSON.parse(localStorage.getItem("news"));
    if (!cart) {
      cart = {
        news: [],
      };
    }
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.news.length,
    });
  };

  const checkNewsInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        news: [],
      };
    }
    let newcart = cart.tikets.filter((elem) => elem.id === id);
    return newcart.length > 0 ? true : false;
  };

  const deleteFromCart = (id, price) => {
    let items = JSON.parse(localStorage.getItem("news"));
    for (let i = 0; i < items.news.length; i++) {
      let targetItem = JSON.parse(items.news[i].item.id);
      let targetItemPrice = JSON.parse(items.news[i].item.price);

      if (targetItem === id) {
        items.news.splice(i, 1);
      }
      if (targetItemPrice === price) {
        items.totalPrice = items.totalPrice - price;
      }
    }
    items = JSON.stringify(items);
    console.log(items);
    localStorage.setItem("news", items);
    getNews();
  };
  function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
      return unsub;
    }, []);
    return currentUser;
  }
  useAuth();

  return (
    <newsContext.Provider
      value={{
        addNews,
        getNews,
        editNews,
        saveEditNews,
        deleteNews,
        deleteFromCart,
        getCartLength,
        checkNewsInCart,
        getCart,
        addCartNews,
        useAuth,
        cart: state.cart,
        edit: state.edit,
        news: state.news,
      }}
    >
      {props.children}
    </newsContext.Provider>
  );
};

export default ContextMy;
