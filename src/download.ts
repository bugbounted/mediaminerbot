import * as tiktokscraper from "tiktok-scraper-ts";
import { isValidTikTokUrl } from "./utils";

const download = async (url: string) => {
    if (isValidTikTokUrl(url)) {
        const video: tiktokscraper.Video | void =
            await tiktokscraper.fetchVideo(url);
        if (video) return video.downloadURL;
    }
};

export default download;
