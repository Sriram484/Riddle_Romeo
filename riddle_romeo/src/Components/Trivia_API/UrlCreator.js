const UrlCreator = (result) => {
    const URL = `https://opentdb.com/api.php?amount=${result.amount}&category=${result.id}&difficulty=${result.difficulty}&type=${result.type}`;
    return URL;
}
export default UrlCreator;