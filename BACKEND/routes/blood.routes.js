const express = require("express");

const {
    createBloodRequest,
    getMyBloodRequests,
    getBloodRequestById,
    cancelBloodRequest
} = require("../controllers/blood.controller");

const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();


// Create blood request
router.post(
    "/",
    authMiddleware,
    createBloodRequest
);


// Get logged-in user's requests
router.get(
    "/my",
    authMiddleware,
    getMyBloodRequests
);


// Get single request
router.get(
    "/:id",
    authMiddleware,
    getBloodRequestById
);


// Cancel request
router.patch(
    "/:id/cancel",
    authMiddleware,
    cancelBloodRequest
);


module.exports = router;