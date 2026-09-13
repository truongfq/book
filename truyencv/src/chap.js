function execute(url) {
    let response = Http.get(url);
    if (response.ok) {
        let doc = response.html();
        doc.select("script, style, .ads, .div-ads").remove();
        let content = doc.select("#chap-content, .chap-content, .content-single").html();
        return Response.success(content);
    }
    return null;
}
