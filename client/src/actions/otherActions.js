import axios from "axios";

import * as api from "../api";
import {
  FETCH_SUBSCRIBERS,
  DELETE_SUBSCRIBER,
  CREATE_ENQUIRY,
  CREATE_TESTIMONIAL,
  FETCH_TESTIMONIALS,
  FETCH_ENQUIRES,
  DELETE_TESTIMONIAL,
  UPDATE_TESTIMONIALS,
  FETCH_TESTIMONIAL,
  CREATE_ARTICLE,
  FETCH_ARTICLES,
  DELETE_ARTICLE,
  FETCH_ARTICLE,
  UPDATE_ARTICLES,
  CREATE_WELCOME,
  FETCH_WELCOME,
  DELETE_WELCOME,
  COUNT_VISITORS,
  SEARCHES,
  FETCH_CAREERS,
  CREATE_CAREERS,
  FETCH_CAREER_VACANCY,
  FETCH_SINGLE_CAREER,
  DELETE_CATEGORY,
  DELETE_VACANCY,
  CREATE_VACANCY,
  UPDATE_VACANCY,
  UPDATE_WELCOME,
} from "./type";

export const sendEmail = (mailId) => async (dispatch) => {
  try {
    await api.sendEmail(mailId);
    alert("Thankyou For Subscribing");
  } catch (error) {
    console.log(error);
    alert("Your EmailId is Already Exist!");
  }
};

export const fetchSubscribers = () => async (dispatch) => {
  const fetchSubscribers = await api.fetchSubscribers();
  try {
    dispatch({
      type: FETCH_SUBSCRIBERS,
      payload: fetchSubscribers.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSubscriber = (id) => async (dispatch) => {
  await api.deleteSubscriber(id);
  try {
    dispatch({
      type: DELETE_SUBSCRIBER,
      payload: id,
    });
    alert("Subscriber Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Subscriber");
  }
};

// Enquires
export const createEnquiry = (postValues) => async (dispatch) => {
  try {
    const createEnquiry = await api.createEnquiry(postValues);
    dispatch({
      type: CREATE_ENQUIRY,
      payload: createEnquiry,
    });
    alert("Your enquiry submitted successfully.");
  } catch (error) {
    console.log(error);
    alert("EmailId already exists");
  }
};

export const fetchEnquires = () => async (dispatch) => {
  const fetchEnquires = await api.fetchEnquires();
  try {
    dispatch({
      type: FETCH_SUBSCRIBERS,
      payload: fetchEnquires.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEnquiries = (id) => async (dispatch) => {
  await api.deleteEnquiries(id);
  try {
    dispatch({
      type: DELETE_SUBSCRIBER,
      payload: id,
    });
    alert("Successfully deleted");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Subscriber");
  }
};

// Testimonials
export const createTestimonial = (postValues) => async (dispatch) => {
  try {
    const createTestimonial = await api.createTestimonial(postValues);
    dispatch({
      type: CREATE_TESTIMONIAL,
      payload: createTestimonial,
    });
    alert("Successfully Form Submitted.");
  } catch (error) {
    if (error.response.status === 409) {
      console.log(error);
      console.log(error.response);
      alert("Please fill all Categories");
    } else if (error.response.status === 413) {
      console.log(error);
      console.log(error.response);
      alert("Size is To large Make sure that size is less than 2MB");
    } else {
      console.log("Error", error.message);
      alert("Your Session has Been Expired. Please Logout and login again.");
    }
    console.log(error.response);
  }
};

export const fetchTestimonial = () => async (dispatch) => {
  const fetchTestimonial = await api.fetchTestimonial();
  try {
    dispatch({
      type: FETCH_TESTIMONIALS,
      payload: fetchTestimonial.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTestimonial = (id) => async (dispatch) => {
  await api.deleteTestimonial(id);
  try {
    dispatch({
      type: DELETE_TESTIMONIAL,
      payload: id,
    });
    alert("Subscriber Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Subscriber");
  }
};

export const updateTestimonials = (id, postValues) => async (dispatch) => {
  try {
    const updateTestimonials = await api.updateTestimonials(id, postValues);
    dispatch({
      type: UPDATE_TESTIMONIALS,
      payload: updateTestimonials.data,
    });
    alert("Successfully updated");
  } catch (error) {
    console.log(error);
    alert(
      "Please fill all Categories and make Sure that Image is less than 2MB."
    );
  }
};

export const fetchSingleTestimonial = (id) => async (dispatch) => {
  const fetchSingleTestimonial = await api.fetchSingleTestimonial(id);
  try {
    dispatch({
      type: FETCH_TESTIMONIAL,
      payload: fetchSingleTestimonial.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Articles
export const createArticle = (postValues) => async (dispatch) => {
  try {
    const createArticle = await api.createArticle(postValues);
    dispatch({
      type: CREATE_ARTICLE,
      payload: createArticle,
    });
    alert("Successfully Form Submitted.");
  } catch (error) {
    if (error.response.status === 409) {
      console.log(error);
      console.log(error.response);
      alert("Please fill all Categories");
    } else if (error.response.status === 413) {
      console.log(error);
      console.log(error.response);
      alert("Size is To large Make sure that size is less than 2MB");
    } else {
      console.log("Error", error.message);
      alert("Your Session has Been Expired. Please Logout and login again.");
    }
    console.log(error.response);
  }
};

export const fetchArticles = () => async (dispatch) => {
  const fetchArticles = await api.fetchArticles();
  try {
    dispatch({
      type: FETCH_ARTICLES,
      payload: fetchArticles.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  await api.deleteArticle(id);
  try {
    dispatch({
      type: DELETE_ARTICLE,
      payload: id,
    });
    alert("Subscriber Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Subscriber");
  }
};

export const fetchSingleArticle = (id) => async (dispatch) => {
  const fetchSingleArticle = await api.fetchSingleArticle(id);
  try {
    dispatch({
      type: FETCH_ARTICLE,
      payload: fetchSingleArticle.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateArticle = (id, postValues) => async (dispatch) => {
  try {
    const updateArticle = await api.updateArticle(id, postValues);
    dispatch({
      type: UPDATE_ARTICLES,
      payload: updateArticle.data,
    });
    alert("Successfully updated");
  } catch (error) {
    console.log(error);
    alert(
      "Please fill all Categories and make Sure that Image is less than 2MB."
    );
  }
};

// Welcome
export const createWelcome = (postValues) => async (dispatch) => {
  try {
    // console.log(postValues);
    const uploadImage = await axios.post("/upload", postValues);

    const createWelcome = await api.createWelcome({ image: uploadImage.data });
    dispatch({
      type: CREATE_WELCOME,
      payload: createWelcome.data,
    });
    alert("Successfully Form Submitted.");
  } catch (error) {
    if (error.response.status === 409) {
      console.log(error);
      console.log(error.response);
      alert("Please fill all Categories");
    } else if (error.response.status === 413) {
      console.log(error);
      console.log(error.response);
      alert("Size is To large Make sure that size is less than 2MB");
    } else {
      console.log("Error", error.message);
      alert("Your Session has Been Expired. Please Logout and login again.");
    }
    // console.log(error.response);
  }
};

export const fetchWelcomeBanner = () => async (dispatch) => {
  const fetchWelcomeBanner = await api.fetchWelcomeBanner();
  try {
    dispatch({
      type: FETCH_WELCOME,
      payload: fetchWelcomeBanner.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteWelcomeBanner = (id) => async (dispatch) => {
  await api.deleteWelcomeBanner(id);
  try {
    dispatch({
      type: DELETE_WELCOME,
      payload: id,
    });
    alert("Banner Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Banner");
  }
};

// Gallery
export const createGallery = (postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    const createGallery = await api.createGallery({
      ...postValues,
      image: uploadImage.data,
    });

    dispatch({
      type: CREATE_WELCOME,
      payload: createGallery.data,
    });
    alert("Successfully Form Submitted.");
  } catch (error) {
    if (error.response.status === 409) {
      console.log(error);
      console.log(error.response);
      alert("Please fill all Categories");
    } else if (error.response.status === 413) {
      console.log(error);
      console.log(error.response);
      alert("Size is To large Make sure that size is less than 2MB");
    } else {
      console.log("Error", error.message);
      alert("Your Session has Been Expired. Please Logout and login again.");
    }
    console.log(error.response);
  }
};

export const fetchGallery = () => async (dispatch) => {
  const fetchGallery = await api.fetchGallery();
  try {
    dispatch({
      type: FETCH_WELCOME,
      payload: fetchGallery.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteGallery = (id) => async (dispatch) => {
  await api.deleteGallery(id);
  try {
    dispatch({
      type: DELETE_WELCOME,
      payload: id,
    });
    alert("Image Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Banner");
  }
};

export const updateGallery = (id, postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    const updateGallery = await api.updateGallery(id, {
      ...postValues,
      image: uploadImage.data,
    });
    dispatch({
      type: UPDATE_WELCOME,
      payload: updateGallery.data,
    });
    alert("Successfully updated");
  } catch (error) {
    if (error.response.status === 409) {
      console.log(error);
      console.log(error.response);
      alert("Please fill all Categories");
    } else if (error.response.status === 413) {
      console.log(error);
      console.log(error.response);
      alert("Size is To large Make sure that size is less than 2MB");
    } else {
      console.log("Error", error.message);
      // alert("Your Session has Been Expired. Please Logout and login again.");

      const updateGallery = await api.updateGallery(id, postValues);
      dispatch({
        type: UPDATE_WELCOME,
        payload: updateGallery.data,
      });
      alert("successfully updated");
    }
    console.log(error.response);
  }
};

// Count visitors
export const fetchVisitors = () => async (dispatch) => {
  const fetchVisitors = await api.fetchVisitors();
  try {
    dispatch({
      type: COUNT_VISITORS,
      payload: fetchVisitors.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const AddVisitors = () => async (dispatch) => {
  const AddVisitors = await api.AddVisitors();
  try {
    dispatch({
      type: COUNT_VISITORS,
      payload: AddVisitors.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Search Terms
export const fetchSearches = () => async (dispatch) => {
  const fetchSearches = await api.fetchSearches();
  try {
    dispatch({
      type: FETCH_TESTIMONIALS,
      payload: fetchSearches.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Career
export const fetchCareers = () => async (dispatch) => {
  const fetchCareers = await api.fetchCareers();
  try {
    dispatch({
      type: FETCH_CAREERS,
      payload: fetchCareers.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const createCareer = (postValues) => async (dispatch) => {
//   try {
//     const createCareer = await api.createCareer(postValues);
//     dispatch({
//       type: CREATE_CAREERS,
//       payload: createCareer.data,
//     });
//     alert("Successfully Form Submitted.");
//   } catch (error) {
//     if (error.response.status === 409) {
//       console.log(error);
//       console.log(error.response);
//       alert("Please fill all Categories");
//     } else if (error.response.status === 413) {
//       console.log(error);
//       console.log(error.response);
//       alert("Size is To large Make sure that size is less than 2MB");
//     } else {
//       console.log("Error", error.message);
//       alert("Your Session has Been Expired. Please Logout and login again.");
//     }
//     console.log(error.response);
//   }
// };

export const createCareer = (postValues, image) => async (dispatch) => {
  const uploadImage = await axios.post("/upload", image);
  try {
    const createPost = await api.createCareer({
      ...postValues,
      resume: uploadImage.data,
    });
    dispatch({
      type: CREATE_CAREERS,
      payload: createPost,
    });
    alert("Successfully Form Submitted.");
  } catch (error) {
    if (error.response.status === 409) {
      console.log(error);
      console.log(error.response);
      alert("Please fill all Categories");
    } else if (error.response.status === 413) {
      console.log(error);
      console.log(error.response);
      alert("Size is To large Make sure that size is less than 2MB");
    } else {
      console.log("Error", error.message);
      alert("Your Session has Been Expired. Please Logout and login again.");
    }
    console.log(error.response);
  }
};

export const fetchSingleCareer = (id) => async (dispatch) => {
  const fetchSingleCareer = await api.fetchSingleCareer(id);
  try {
    dispatch({
      type: FETCH_SINGLE_CAREER,
      payload: fetchSingleCareer.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchedCareer = (searchValue) => async (dispatch) => {
  try {
    const searchPosts = await api.fetchSearchedCareer(searchValue);
    try {
      dispatch({
        type: FETCH_CAREERS,
        payload: searchPosts.data,
      });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    // dispatch({
    //   type: POST_ERROR,
    //   payload: "No  Found.",
    // });
    console.log(error);
  }
};

export const deleteCareer = (id) => async (dispatch) => {
  await api.deleteCareer(id);
  try {
    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    });
    alert("Subscriber Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Subscriber");
  }
};

// Career Vacancy
export const fetchCareerVacancy = () => async (dispatch) => {
  const fetchCareerVacancy = await api.fetchCareerVacancy();
  try {
    dispatch({
      type: FETCH_CAREER_VACANCY,
      payload: fetchCareerVacancy.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createVacancy = (postValues) => async (dispatch) => {
  try {
    const createVacancy = await api.createVacancy(postValues);
    dispatch({
      type: CREATE_VACANCY,
      payload: createVacancy.data,
    });
    alert("Successfully Form Submitted.");
  } catch (error) {
    console.log(error);
    alert("Sorry Can't Submit Your Form.");
  }
};

export const fetchSearchedCareerVacancy = (searchValue) => async (dispatch) => {
  try {
    const searchPosts = await api.fetchSearchedCareerVacancy(searchValue);
    try {
      dispatch({
        type: FETCH_CAREER_VACANCY,
        payload: searchPosts.data,
      });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    // dispatch({
    //   type: POST_ERROR,
    //   payload: "No  Found.",
    // });
    console.log(error);
  }
};

export const deleteVacancy = (id) => async (dispatch) => {
  await api.deleteVacancy(id);
  try {
    dispatch({
      type: DELETE_VACANCY,
      payload: id,
    });
    alert("Subscriber Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Subscriber");
  }
};

export const updateVacancy = (id, postValues) => async (dispatch) => {
  try {
    const updateVacancy = await api.updateVacancy(id, postValues);
    dispatch({
      type: UPDATE_VACANCY,
      payload: updateVacancy.data,
    });
    alert("Successfully updated");
  } catch (error) {
    console.log(error);
    alert(
      "Please fill all Categories and make Sure that Image is less than 2MB."
    );
  }
};

// Enquires
export const createContact = (postValues) => async (dispatch) => {
  try {
    const createContact = await api.createContact(postValues);
    dispatch({
      type: CREATE_ENQUIRY,
      payload: createContact,
    });
    alert("Successfully Enquiry Submitted.");
  } catch (error) {
    console.log(error);
    alert("EmailId already exists");
  }
};

export const fetchContacts = () => async (dispatch) => {
  const fetchContacts = await api.fetchContacts();
  try {
    dispatch({
      type: FETCH_SUBSCRIBERS,
      payload: fetchContacts.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContacts = (id) => async (dispatch) => {
  await api.deleteContacts(id);
  try {
    dispatch({
      type: DELETE_SUBSCRIBER,
      payload: id,
    });
    alert("Successfully deleted");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete");
  }
};
