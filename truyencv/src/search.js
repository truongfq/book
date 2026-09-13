function execute(keyword, page) {
    if (!page) page = '1';
    let url = BASE_URL + "/tim-kiem?nhap=" + encodeURIComponent(keyword) + "&page=" + page;
    return gen(url);
}
