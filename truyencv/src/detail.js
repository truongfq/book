function execute(url) {
    let response = Http.get(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("h1.title, .book-title").text().trim(),
            cover: doc.select(".book-img img, .cover img").attr("src"),
            author: doc.select(".author-name, .author").text().trim(),
            description: doc.select(".book-desc, .description").html(),
            detail: "Tác giả: " + doc.select(".author").text().trim(),
            host: BASE_URL
        });
    }
    return null;
}
