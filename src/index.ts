import express from "express";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

import dotenv from "dotenv";

dotenv.config();
const token = process.env.BOT_TOKEN;

const bot = new Telegraf(token!);

const app = express();

bot.start((ctx) => ctx.reply("Welcome"));
bot.start((ctx) => ctx.reply("Welcome"));

bot.on(message("text"), (ctx) => ctx.reply("👍"));

bot.launch();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port", port));
