import * as api from "../api";
import axios from "axios";

import {
  ADD_PRODUCT,
  FETCH_CATEGORY,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./type";

export const fetchCategory = () => async (dispatch) => {
  const fetchCategory = await api.fetchCategory();
  try {
    dispatch({
      type: FETCH_CATEGORY,
      payload: fetchCategory.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchFertilizers = () => async (dispatch) => {
  const fetchFertilizers = await api.fetchFertilizers();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchFertilizers.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchGrowthPromoters = () => async (dispatch) => {
  const fetchGrowthPromoters = await api.fetchGrowthPromoters();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchGrowthPromoters.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAdjuvants = () => async (dispatch) => {
  const fetchAdjuvants = await api.fetchAdjuvants();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchAdjuvants.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSeeds = () => async (dispatch) => {
  const fetchSeeds = await api.fetchSeeds();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchSeeds.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSprayers = () => async (dispatch) => {
  const fetchSprayers = await api.fetchSprayers();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchSprayers.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchBioProducts = () => async (dispatch) => {
  const fetchBioProducts = await api.fetchBioProducts();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchBioProducts.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPesticides = () => async (dispatch) => {
  const fetchPesticides = await api.fetchPesticides();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchPesticides.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPheromones = () => async (dispatch) => {
  const fetchPheromones = await api.fetchPheromones();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchPheromones.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPheromones = (postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    const createPheromones = await api.createPheromones({
      ...postValues,
      image: uploadImage.data,
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: createPheromones,
    });
    alert("Successfully Product Added.");
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

export const createFetlizer = (postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    const createPost = await api.createFertilizer({
      ...postValues,
      image: uploadImage.data,
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: createPost,
    });
    alert("Successfully Product Added.");
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

export const createBioProducts = (postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    const createPost = await api.createBioProducts({
      ...postValues,
      image: uploadImage.data,
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: createPost,
    });
    alert("Successfully Product Added.");
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

export const createSeedsProducts = (postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    const createPost = await api.createSeedsProducts({
      ...postValues,
      image: uploadImage.data,
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: createPost,
    });
    alert("Successfully Product Added.");
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

export const createSprayersProducts =
  (postValues, image) => async (dispatch) => {
    try {
      const uploadImage = await axios.post("/upload", image);
      const createPost = await api.createSprayersProducts({
        ...postValues,
        image: uploadImage.data,
      });
      dispatch({
        type: ADD_PRODUCT,
        payload: createPost,
      });
      alert("Successfully Product Added.");
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

export const createAdjuvantsProducts =
  (postValues, image) => async (dispatch) => {
    const uploadImage = await axios.post("/upload", image);
    try {
      const createPost = await api.createAdjuvantsProducts({
        ...postValues,
        image: uploadImage.data,
      });
      dispatch({
        type: ADD_PRODUCT,
        payload: createPost,
      });
      alert("Successfully Product Added.");
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

export const createPesticidesProducts =
  (postValues, image) => async (dispatch) => {
    try {
      const uploadImage = await axios.post("/upload", image);
      const createPost = await api.createPesticidesProducts({
        ...postValues,
        image: uploadImage.data,
      });
      dispatch({
        type: ADD_PRODUCT,
        payload: createPost,
      });
      alert("Successfully Product Added.");
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

export const createGrowthProducts = (postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    const createPost = await api.createGrowthProducts({
      ...postValues,
      image: uploadImage.data,
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: createPost,
    });
    alert("Successfully Product Added.");
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

export const fetchSingleFertilizer = (id) => async (dispatch) => {
  const fetchSingleFertilizer = await api.fetchSingleFertilizer(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSingleFertilizer.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleGrowth = (id) => async (dispatch) => {
  const fetchSingleGrowth = await api.fetchSingleGrowth(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSingleGrowth.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleAdjuvants = (id) => async (dispatch) => {
  const fetchSingleAdjuvants = await api.fetchSingleAdjuvants(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSingleAdjuvants.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleSeed = (id) => async (dispatch) => {
  const fetchSingleSeed = await api.fetchSingleSeed(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSingleSeed.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleSprayer = (id) => async (dispatch) => {
  const fetchSingleSprayer = await api.fetchSingleSprayer(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSingleSprayer.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleBioProduct = (id) => async (dispatch) => {
  const fetchSingleBioProduct = await api.fetchSingleBioProduct(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSingleBioProduct.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSinglePesticide = (id) => async (dispatch) => {
  const fetchSinglePesticide = await api.fetchSinglePesticide(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSinglePesticide.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateFertilizer =
  (id, postValues, image, image1) => async (dispatch) => {
    // console.log(postValues);
    try {
      if (postValues.image1 !== "") {
        // console.log("calling second1");
        const uploadImage = await axios.post("/upload", image1);
        const updateFertilizer = await api.updateFertilizer(id, {
          ...postValues,
          image1: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateFertilizer.data,
        });
        alert("Successfully updated");
      } else {
        // console.log("calling second");
        const uploadImage = await axios.post("/upload", image);
        const updateFertilizer = await api.updateFertilizer(id, {
          ...postValues,
          image: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateFertilizer.data,
        });
        alert("Successfully updated");
      }
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

        const updateFertilizer = await api.updateFertilizer(id, postValues);
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateFertilizer.data,
        });
        alert("successfully updated");
        return;
      }
      const updateFertilizer = await api.updateFertilizer(id, postValues);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updateFertilizer.data,
      });
      alert("successfully updated");
      console.log(error.response);
    }
  };

export const updatePheromones =
  (id, postValues, image, image1) => async (dispatch) => {
    try {
      if (postValues.image1 !== "") {
        // console.log("calling second1");
        const uploadImage = await axios.post("/upload", image1);
        const updatePheromones = await api.updatePheromones(id, {
          ...postValues,
          image1: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updatePheromones.data,
        });
        alert("Successfully updated");
      } else {
        // console.log("calling second");
        const uploadImage = await axios.post("/upload", image);
        const updatePheromones = await api.updatePheromones(id, {
          ...postValues,
          image: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updatePheromones.data,
        });
        alert("Successfully updated");
      }
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

        const updatePheromones = await api.updatePheromones(id, postValues);
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updatePheromones.data,
        });
        alert("successfully updated");
        return;
      }
      const updatePheromones = await api.updatePheromones(id, postValues);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updatePheromones.data,
      });
      alert("successfully updated");
      console.log(error.response);
    }
  };

export const deleteFertilizer = (id) => async (dispatch) => {
  await api.deleteFertilizer(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Product Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Product");
  }
};

export const deletePheromones = (id) => async (dispatch) => {
  await api.deletePheromones(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Product Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Product");
  }
};

export const updateAdjuvants =
  (id, postValues, image, image1) => async (dispatch) => {
    try {
      if (postValues.image1 !== "") {
        // console.log("calling second1");
        const uploadImage = await axios.post("/upload", image1);
        const updateAdjuvants = await api.updateAdjuvants(id, {
          ...postValues,
          image1: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateAdjuvants.data,
        });
        alert("Successfully updated");
      } else {
        // console.log("calling second");
        const uploadImage = await axios.post("/upload", image);
        const updateAdjuvants = await api.updateAdjuvants(id, {
          ...postValues,
          image: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateAdjuvants.data,
        });
        alert("Successfully updated");
      }
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

        const updateAdjuvants = await api.updateAdjuvants(id, postValues);
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateAdjuvants.data,
        });
        alert("successfully updated");
        return;
      }
      const updateAdjuvants = await api.updateAdjuvants(id, postValues);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updateAdjuvants.data,
      });
      alert("successfully updated");
      console.log(error.response);
    }
  };

export const deleteAdjuvant = (id) => async (dispatch) => {
  await api.deleteAdjuvant(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Product Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Product");
  }
};

export const updateSeeds =
  (id, postValues, image, image1) => async (dispatch) => {
    try {
      if (postValues.image1 !== "") {
        // console.log("calling second1");
        const uploadImage = await axios.post("/upload", image1);
        const updateSeeds = await api.updateSeeds(id, {
          ...postValues,
          image1: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateSeeds.data,
        });
        alert("Successfully updated");
      } else {
        // console.log("calling second");
        const uploadImage = await axios.post("/upload", image);
        const updateSeeds = await api.updateSeeds(id, {
          ...postValues,
          image: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateSeeds.data,
        });
        alert("Successfully updated");
      }
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

        const updateSeeds = await api.updateSeeds(id, postValues);
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateSeeds.data,
        });
        alert("successfully updated");
        return;
      }
      const updateSeeds = await api.updateSeeds(id, postValues);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updateSeeds.data,
      });
      alert("successfully updated");
      console.log(error.response);
    }
  };

export const deleteSeeds = (id) => async (dispatch) => {
  await api.deleteSeeds(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Product Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Product");
  }
};

export const updateBioProducts =
  (id, postValues, image, image1) => async (dispatch) => {
    try {
      if (postValues.image1 !== "") {
        // console.log("calling second1");
        const uploadImage = await axios.post("/upload", image1);
        const updateBioProducts = await api.updateBioProducts(id, {
          ...postValues,
          image1: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateBioProducts.data,
        });
        alert("Successfully updated");
      } else {
        // console.log("calling second");
        const uploadImage = await axios.post("/upload", image);
        const updateBioProducts = await api.updateBioProducts(id, {
          ...postValues,
          image: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateBioProducts.data,
        });
        alert("Successfully updated");
      }
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

        const updateBioProducts = await api.updateBioProducts(id, postValues);
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateBioProducts.data,
        });
        alert("successfully updated");
        return;
      }
      const updateBioProducts = await api.updateBioProducts(id, postValues);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updateBioProducts.data,
      });
      alert("successfully updated");
      console.log(error.response);
    }
  };

export const deleteBioProducts = (id) => async (dispatch) => {
  await api.deleteBioProducts(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Product Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Product");
  }
};

export const updateBioPesticide =
  (id, postValues, image, image1) => async (dispatch) => {
    try {
      if (postValues.image1 !== "") {
        // console.log("calling second1");
        const uploadImage = await axios.post("/upload", image1);
        const updateBioPesticide = await api.updateBioPesticide(id, {
          ...postValues,
          image1: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateBioPesticide.data,
        });
        alert("Successfully updated");
      } else {
        // console.log("calling second");
        const uploadImage = await axios.post("/upload", image);
        const updateBioPesticide = await api.updateBioPesticide(id, {
          ...postValues,
          image: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateBioPesticide.data,
        });
        alert("Successfully updated");
      }
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

        const updateBioPesticide = await api.updateBioPesticide(id, postValues);
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateBioPesticide.data,
        });
        alert("successfully updated");
        return;
      }
      const updateBioPesticide = await api.updateBioPesticide(id, postValues);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updateBioPesticide.data,
      });
      alert("successfully updated");
      console.log(error.response);
    }
  };

export const deleteBioPesticide = (id) => async (dispatch) => {
  await api.deleteBioPesticide(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Product Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Product");
  }
};

export const updateGrowth =
  (id, postValues, image, image1) => async (dispatch) => {
    try {
      if (postValues.image1 !== "") {
        // console.log("calling second1");
        const uploadImage = await axios.post("/upload", image1);
        const updateGrowth = await api.updateGrowth(id, {
          ...postValues,
          image1: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateGrowth.data,
        });
        alert("Successfully updated");
      } else {
        // console.log("calling second");
        const uploadImage = await axios.post("/upload", image);
        const updateGrowth = await api.updateGrowth(id, {
          ...postValues,
          image: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateGrowth.data,
        });
        alert("Successfully updated");
      }
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

        const updateGrowth = await api.updateGrowth(id, postValues);
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateGrowth.data,
        });
        alert("successfully updated");
        return;
      }
      const updateGrowth = await api.updateGrowth(id, postValues);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updateGrowth.data,
      });
      alert("successfully updated");
      console.log(error.response);
    }
  };

export const deleteGrowth = (id) => async (dispatch) => {
  await api.deleteGrowth(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Product Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Product");
  }
};

export const updateSprayers =
  (id, postValues, image, image1) => async (dispatch) => {
    try {
      if (postValues.image1 !== "") {
        // console.log("calling second1");
        const uploadImage = await axios.post("/upload", image1);
        const updateSprayers = await api.updateSprayers(id, {
          ...postValues,
          image1: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateSprayers.data,
        });
        alert("Successfully updated");
      } else {
        // console.log("calling second");
        const uploadImage = await axios.post("/upload", image);
        const updateSprayers = await api.updateSprayers(id, {
          ...postValues,
          image: uploadImage.data,
        });
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateSprayers.data,
        });
        alert("Successfully updated");
      }
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

        const updateSprayers = await api.updateSprayers(id, postValues);
        dispatch({
          type: UPDATE_PRODUCT,
          payload: updateSprayers.data,
        });
        alert("successfully updated");
        return;
      }
      const updateSprayers = await api.updateSprayers(id, postValues);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updateSprayers.data,
      });
      alert("successfully updated");
      console.log(error.response);
    }
  };

export const deleteSprayers = (id) => async (dispatch) => {
  await api.deleteSprayers(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Product Delete Successfully");
  } catch (error) {
    console.log(error);
    alert("Sorry can't Delete Product");
  }
};
