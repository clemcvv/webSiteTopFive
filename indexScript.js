document.getElementById("topForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const title = document.getElementById("title").value;

    const subtitles = [];
    const images = [];
    const descriptions = [];

    for (let i = 1; i <= 5; i++) {
        subtitles.push(document.getElementById("subtitle" + i).value);
        images.push(document.getElementById("image" + i).value);
        descriptions.push(document.getElementById("description" + i).value);
    }

    console.log("Title:", title);
    console.log("Subtitles:", subtitles);
    console.log("Images:", images);
    console.log("Descriptions:", descriptions);
});
