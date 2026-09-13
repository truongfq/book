function execute(url) {
    let response = Http.get(url);
    if (response.ok) {
        let doc = response.html();
        let list = [];

        doc.select(".list-stories .story-item, .list-truyen .item").forEach(e => {
            let cover = e.select("img").attr("src") || e.select("img").attr("data-src");
            list.push({
                name: e.select(".story-title, .title").text().trim(),
                link: e.select("a").first().attr("href"),
                cover: cover,
                description: e.select(".author").text().trim(),
                host: BASE_URL
            });
        });

        let next = doc.select(".pagination .active + li a").attr("href");
        return Response.success(list, next);
    }
    return null;
}
