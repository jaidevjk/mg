import axios from "axios";

// const API = axios.create({
//   baseURL: "https://multiplex-backend-testing.azurewebsites.net",
// });

// const API = axios.create({
//   baseURL: "https://multiplexgroup.herokuapp.com",
// });

// const API = axios.create({
//   baseURL: "http://localhost:5000",
// });

const API = axios;

API.interceptors.request.use((req) => {
  if (sessionStorage.getItem("profile")) {
    req.headers.Authorization = `${
      JSON.parse(sessionStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const createFertilizer = (postValues) =>
  API.post("/products/fertilizer", postValues);
export const createBioProducts = (postValues) =>
  API.post("/products/bio", postValues);
export const createSeedsProducts = (postValues) =>
  API.post("/products/seeds", postValues);
export const createSprayersProducts = (postValues) =>
  API.post("/products/sprayers", postValues);
export const createAdjuvantsProducts = (postValues) =>
  API.post("/products/adjuvants", postValues);
export const createPesticidesProducts = (postValues) =>
  API.post("/products/pesticides", postValues);
export const createGrowthProducts = (postValues) =>
  API.post("/products/growth", postValues);
export const createPheromones = (postValues) =>
  API.post("/products/pheromones", postValues);
export const fetchCategory = () => API.get("/category");
export const fetchFertilizers = () => API.get("/products/fertilizer");
export const fetchAdjuvants = () => API.get("/products/adjuvants");
export const fetchSeeds = () => API.get("/products/seeds");
export const fetchSprayers = () => API.get("/products/sprayers");
export const fetchGrowthPromoters = () => API.get("/products/growth");
export const fetchBioProducts = () => API.get("/products/bioProducts");
export const fetchPheromones = () => API.get("/products/pheromones");
export const fetchPesticides = () => API.get("/products/pesticides");
export const fetchSingleFertilizer = (id) =>
  API.get(`/products/fertilizer/${id}`);
export const fetchSingleGrowth = (id) => API.get(`/products/growth/${id}`);
export const fetchSingleAdjuvants = (id) =>
  API.get(`/products/adjuvants/${id}`);
export const fetchSingleSeed = (id) => API.get(`/products/seeds/${id}`);
export const fetchSingleSprayer = (id) => API.get(`/products/sprayers/${id}`);
export const fetchSingleBioProduct = (id) =>
  API.get(`/products/bioProducts/${id}`);
export const fetchSinglePesticide = (id) =>
  API.get(`/products/pesticides/${id}`);

// update
export const updateFertilizer = (id, values) =>
  API.patch(`/products/fertilizer/${id}`, values);
export const updateSeeds = (id, values) =>
  API.patch(`/products/seeds/${id}`, values);
export const updateAdjuvants = (id, values) =>
  API.patch(`/products/adjuvants/${id}`, values);
export const updateBioProducts = (id, values) =>
  API.patch(`/products/bio/${id}`, values);
export const updateBioPesticide = (id, values) =>
  API.patch(`/products/pesticides/${id}`, values);
export const updateGrowth = (id, values) =>
  API.patch(`/products/growth/${id}`, values);
export const updateSprayers = (id, values) =>
  API.patch(`/products/sprayers/${id}`, values);
export const updatePheromones = (id, values) =>
  API.patch(`/products/pheromones/${id}`, values);

// Delete
export const deleteFertilizer = (id) =>
  API.delete(`/products/fertilizer/${id}`);
export const deleteSeeds = (id) => API.delete(`/products/seeds/${id}`);
export const deleteAdjuvant = (id) => API.delete(`/products/adjuvants/${id}`);
export const deleteBioProducts = (id) => API.delete(`/products/bio/${id}`);
export const deleteBioPesticide = (id) =>
  API.delete(`/products/pesticides/${id}`);
export const deleteGrowth = (id) => API.delete(`/products/growth/${id}`);
export const deleteSprayers = (id) => API.delete(`/products/sprayers/${id}`);
export const deletePheromones = (id) =>
  API.delete(`/products/pheromones/${id}`);

// Sending mails
// export const sendEmail = (emailId) => API.post(`/subscribe/sendMail`, emailId);
export const sendEmail = (emailId) => API.post(`/subscribe/sendMail`, emailId);
export const fetchSubscribers = () => API.get("/subscribe/");
export const deleteSubscriber = (id) => API.delete(`/subscribe/${id}`);

// Enquiry Starts
// export const createEnquiry = (values) => API.post(`/enquiry`, values);
export const createEnquiry = (values) => API.post(`/enquiry`, values);
export const fetchEnquires = () => API.get("/enquiry");
export const deleteEnquiries = (id) => API.delete(`/enquiry/${id}`);

// Testimonial
export const createTestimonial = (values) => API.post(`/testimonial`, values);
export const fetchTestimonial = () => API.get("/testimonial/");
export const deleteTestimonial = (id) => API.delete(`/testimonial/${id}`);
export const updateTestimonials = (id, values) =>
  API.patch(`/testimonial/${id}`, values);
export const fetchSingleTestimonial = (id) => API.get(`/testimonial/${id}`);

// Articles
export const createArticle = (values) => API.post(`/article`, values);
export const fetchArticles = () => API.get("/article/");
export const deleteArticle = (id) => API.delete(`/article/${id}`);
export const fetchSingleArticle = (id) => API.get(`/article/${id}`);
export const updateArticle = (id, values) =>
  API.patch(`/article/${id}`, values);

// Articles
export const createWelcome = (values) => API.post(`/welcome`, values);
export const fetchWelcomeBanner = () => API.get("/welcome/");
export const deleteWelcomeBanner = (id) => API.delete(`/welcome/${id}`);

// Visitors
export const fetchVisitors = () => API.get("/visitor/");
export const AddVisitors = () => API.post("/visitor/");

// Searches
export const fetchSearches = () => API.get("/search/");

// Careers
export const fetchCareers = () => API.get("/career/");
// export const createCareer = (values) => API.post(`/career`, values);
export const createCareer = (values) => API.post(`/career`, values);
export const fetchSearchedCareer = (formValues) =>
  API.get(`/career/search?search=${formValues}`);
export const fetchSingleCareer = (id) => API.get(`/career/${id}`);
export const deleteCareer = (id) => API.delete(`/career/${id}`);

// Career Vacancy
export const fetchCareerVacancy = () => API.get("/vacancy/");
export const fetchSearchedCareerVacancy = (formValues) =>
  API.get(`/vacancy/search?search=${formValues}`);
export const deleteVacancy = (id) => API.delete(`/vacancy/${id}`);
export const createVacancy = (values) => API.post(`/vacancy`, values);
export const updateVacancy = (id, values) =>
  API.patch(`/vacancy/${id}`, values);

// Enquiry Starts
export const createContact = (values) => API.post(`/contacts`, values);
export const fetchContacts = () => API.get("/contacts/");
export const deleteContacts = (id) => API.delete(`/contacts/${id}`);

// Gallery
export const createGallery = (values) => API.post(`/gallery`, values);
export const fetchGallery = () => API.get("/gallery/");
export const deleteGallery = (id) => API.delete(`/gallery/${id}`);
export const updateGallery = (id, values) =>
  API.patch(`/gallery/${id}`, values);
