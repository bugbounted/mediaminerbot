import * as tiktokscraper from "tiktok-scraper-ts";

(async () => {
    const video = await tiktokscraper.fetchVideo(
        "https://vm.tiktok.com/ZMYJHtvH2/"
    );
    console.log(video);
})();
