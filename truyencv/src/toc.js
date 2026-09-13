function execute(url) {
    let response = Http.get(url);
    if (response.ok) {
        let doc = response.html();
        let chapters = [];
        doc.select("ul.list-chap li a, .list-chapter a").forEach(e => {
            chapters.push({
                name: e.text().trim(),
                url: e.attr("href")
            });
        });
        return Response.success(chapters);
    }
    return null;
}
