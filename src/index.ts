import express from "express";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();
const token = process.env.BOT_TOKEN;

const bot = new Telegraf(token!);

const app = express();

bot.on("text", (ctx) => ctx.reply("Hello"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port", port));
