import { config } from "dotenv";
config();
import cors from "cors";
import express from "express";
import { json, urlencoded } from "body-parser";
import { fetchTweets, saveTweet } from "./controllers/index.controller";
const app = express();
const serverPort = process.env.PORT || 9000;
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Success");
});
app.post("/api/save-tweet", saveTweet);
app.get("/api/get-tweets", fetchTweets);
app.all("/*", async (req, res) => {
  console.error(
    "route not found " + new Date(Date.now()) + " " + req.originalUrl
  );
  res.status(404).json({
    status: "error",
    message: `OOPs!! No handler defined for ${req.method.toUpperCase()}: ${
      req.url
    } route. Check the API documentation for more details.`,
  });
});

// start server
app.listen(serverPort, async () => {
  console.log(`Bot is running on port ${serverPort}`);
});
