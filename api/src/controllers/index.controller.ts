import { PrismaClient, Tweets } from "@prisma/client";
import { Tweet } from "../types";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getTweets = async (): Promise<Tweets[] | null> => {
  try {
    return await prisma.tweets.findMany({
      orderBy: { createdAt: "desc" },
      take: 15,
    });
  } catch (error) {
    console.error("get Tweets error: ", error);
    return null;
  }
};

export const fetchTweets = async (req: Request, res: Response) => {
  try {
    const tweets = await getTweets();
    res.status(200).json(tweets);
  } catch (error) {
    console.error("Fetch Tweets error: ", error);
    res.status(500).json({ error: "Error fetching tweets" });
  }
};

const saveTweetToDb = async (tweet: Tweet) => {
  try {
    console.info("saving Tweet to Db: ", tweet);
    return await prisma.tweets.create({
      data: {
        tweetId: tweet.tweetId.toString() as string,
        tweetUrl: tweet.tweetUrl.toString() as string,
        text: tweet.text.toString() as string,
        user: tweet.user.toString() as string,
      },
    });
  } catch (error) {
    console.error("Save Tweet To DB error: ", error);
  }
};

export const saveTweet = async (req: Request, res: Response) => {
  try {
    const tweet = req.body;
    const savedTweet = await saveTweetToDb(tweet);
    res.status(200).json(savedTweet);
  } catch (error) {
    console.error("Save Tweet error: ", error);
    res.status(500).json({ error: "Error saving tweet" });
  }
};
