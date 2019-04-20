function compile() {
    let markdown = document.getElementById("markdown");
    let preview = document.getElementById("preview");

    if (markdown.value === "") {
        preview.innerHTML = '<p style="color: grey;">Preview</p>'; 
        return ;
    }

    preview.innerHTML = marked(markdown.value);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "preview"]);
}
