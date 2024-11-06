// backend/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Expected format: "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided!' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // You can use req.user in routes for further checks if needed
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or Expired Token!' });
    }
};

module.exports = authenticateToken;
