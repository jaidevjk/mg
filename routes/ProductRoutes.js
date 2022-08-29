const express = require("express");

const auth = require("../middlewares/auth.js");
const {
  createFetlizer,
  createBioProducts,
  createSeedsProducts,
  createSprayersProducts,
  createAdjuvantsProducts,
  createPesticidesProducts,
  createGrowthProducts,
  fetchFertilizers,
  fetchSingleFertilizer,
  fetchGrowthPromoters,
  fetchSingleGrowth,
  fetchAdjuvants,
  fetchSingleAdjuvants,
  fetchSeeds,
  fetchSingleSeeds,
  fetchSprayers,
  fetchSingleSprayers,
  fetchBioProducts,
  fetchSingleBioProduct,
  fetchPesticides,
  fetchSinglePesticide,
  updateFertilizer,
  deleteFertilizer,
  updateSeeds,
  deleteSeeds,
  updateAdjuvants,
  deleteAdjuvants,
  updateBio,
  deleteBio,
  updatePesticides,
  deletePesticides,
  updateGrowth,
  deleteGrowth,
  updateSprayers,
  deleteSprayers,
  fetchPheromones,
  createPheromones,
  fetchSinglePheromones,
  updatePheromones,
  deletePheromones,
} = require("../controllers/productControllers.js");
const router = express.Router();

// Admin routes
router.post("/fertilizer", auth, createFetlizer);
router.post("/pheromones", auth, createPheromones);
router.post("/bio", auth, createBioProducts);
router.post("/seeds", auth, createSeedsProducts);
router.post("/sprayers", auth, createSprayersProducts);
router.post("/adjuvants", auth, createAdjuvantsProducts);
router.post("/pesticides", auth, createPesticidesProducts);
router.post("/growth", auth, createGrowthProducts);
router.patch("/fertilizer/:id", auth, updateFertilizer);
router.delete("/fertilizer/:id", auth, deleteFertilizer);
router.patch("/seeds/:id", auth, updateSeeds);
router.delete("/seeds/:id", auth, deleteSeeds);
router.patch("/adjuvants/:id", auth, updateAdjuvants);
router.delete("/adjuvants/:id", auth, deleteAdjuvants);
router.patch("/bio/:id", auth, updateBio);
router.delete("/bio/:id", auth, deleteBio);
router.patch("/pesticides/:id", auth, updatePesticides);
router.delete("/pesticides/:id", deletePesticides);
router.patch("/growth/:id", auth, updateGrowth);
router.delete("/growth/:id", auth, deleteGrowth);
router.patch("/sprayers/:id", auth, updateSprayers);
router.delete("/sprayers/:id", auth, deleteSprayers);
router.patch("/pheromones/:id", auth, updatePheromones);
router.delete("/pheromones/:id", auth, deletePheromones);

// NON ADMIN
router.get("/fertilizer", fetchFertilizers);
router.get("/fertilizer/:id", fetchSingleFertilizer);
router.get("/growth", fetchGrowthPromoters);
router.get("/growth/:id", fetchSingleGrowth);
router.get("/adjuvants", fetchAdjuvants);
router.get("/adjuvants/:id", fetchSingleAdjuvants);
router.get("/seeds", fetchSeeds);
router.get("/seeds/:id", fetchSingleSeeds);
router.get("/sprayers", fetchSprayers);
router.get("/sprayers/:id", fetchSingleSprayers);
router.get("/bioProducts", fetchBioProducts);
router.get("/bioProducts/:id", fetchSingleBioProduct);
router.get("/pesticides", fetchPesticides);
router.get("/pesticides/:id", fetchSinglePesticide);
router.get("/pheromones", fetchPheromones);
router.get("/pheromones/:id", fetchSinglePheromones);

module.exports = router;
