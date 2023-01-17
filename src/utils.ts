export const isValidUrl = (urlString: string) => {
    var urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // validate protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
};

export const isValidTikTokUrl = (url: string) => {
    let pattern = /^(https?:\/\/)?(www\.)?(tiktok\.com\/@|vm\.tiktok\.com\/)/;
    return pattern.test(url);
};

export const isValidYouTubeUrl = (url: string) => {
    const pattern =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return pattern.test(url);
};

export const isValidInstagramLink = (url: string) => {
    let pattern = /^https:\/\/www\.instagram\.com\/[a-zA-Z0-9_]+\/?.*$/;
    return pattern.test(url);
};
