import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import categoryReducers from "./categoryReducers";
import ProductReducers from "./ProductReducers";
import SingleProduct from "./SingleProduct";
import authReducers from "./authReducers";
import subscriptions from "./SubscriptionReducers";
import testimonials from "./testimonialReducers";
import articles from "./articleReducers";
import welcome from "./welcomeReducers";
import visitors from "./visitorRoutes";
import careers from "./CareerReducers";
import CareerVacancies from "./CareerVacancyReducers";
import SingleCareer from "./SingleCareer";

export default combineReducers({
  category: categoryReducers,
  products: ProductReducers,
  SingleProduct,
  auth: authReducers,
  form: formReducer,
  subscriptions,
  testimonials,
  articles,
  welcome,
  visitors,
  careers,
  CareerVacancies,
  SingleCareer,
});
