"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const employee_routes_1 = __importDefault(require("./routes/employee.routes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
// Create server
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Allow JSON
app.use((0, cors_1.default)()); // Allow frontend to send requests
// Routes
app.use("/employees", employee_routes_1.default);
// Fallback
app.use((req, res, next) => {
    res.status(404).send("Page not found!");
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
