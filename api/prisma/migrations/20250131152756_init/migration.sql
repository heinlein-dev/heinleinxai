-- CreateTable
CREATE TABLE "Tweets" (
    "id" SERIAL NOT NULL,
    "tweetId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "tweetUrl" TEXT NOT NULL,
    "user" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Tweets_pkey" PRIMARY KEY ("id")
);
