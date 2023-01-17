import express from "express";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import * as tiktokscraper from "tiktok-scraper-ts";
import dotenv from "dotenv";
import { isValidInstagramLink, isValidTikTokUrl, isValidUrl } from "./utils";
import downloadIG from "./instagram";

dotenv.config();
const token = process.env.BOT_TOKEN;

const bot = new Telegraf(token!);

const app = express();

bot.start((ctx) => {
    console.log(ctx.from);
    ctx.reply("Welcome");
});

bot.command("quit", async (ctx) => {
    try {
        console.log(ctx.from);
        // Explicit usage
        // Using context shortcut
    } catch (error) {
        console.log(error);
    }
});

bot.on(message("text"), async (ctx) => {
    const userInput = ctx.message.text;
    try {
        if (isValidUrl(userInput)) {
            if (isValidTikTokUrl(userInput)) {
                const video = await tiktokscraper.fetchVideo(userInput);
                if (video) ctx.replyWithVideo(video.downloadURL);
            } else if (isValidInstagramLink(userInput)) {
                const video: any = await downloadIG(userInput);
                if (video.url_list && video.url_list.length) {
                    video.url_list.forEach((url: string) =>
                        ctx.replyWithVideo(url)
                    );
                }
            } else {
                ctx.reply(
                    `I am still learning and I am not able to process this type of media yet.`
                );
            }
        }
    } catch (error) {
        ctx.reply(
            "I am sorry, I have encountered a problem with this one and I have notified my developers about it. "
        );
        console.error(error);
    }
});

bot.hears("text", async (ctx) => {
    try {
        const userInput = ctx.message.text;
        if (isValidUrl(userInput)) {
            if (isValidTikTokUrl(userInput)) {
                const video = await tiktokscraper.fetchVideo(userInput);
                if (video) ctx.replyWithVideo(video.downloadURL);
            } else if (isValidInstagramLink(userInput)) {
                const video: any = await downloadIG(userInput);
                if (video.url_list && video.url_list.length) {
                    video.url_list.forEach((url: string) =>
                        ctx.replyWithVideo(url)
                    );
                }
            } else {
                ctx.reply(
                    `I am still learning and I am not able to process this type of media yet.`
                );
            }
        }
    } catch (error) {
        ctx.reply(
            "I am sorry, I have encountered a problem with this one and I have notified my developers about it. "
        );
        console.error(error);
    }
});

bot.launch();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port", port));
