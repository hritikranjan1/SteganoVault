// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Drag & Drop Upload
const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("encodeFile");

dropZone.addEventListener("click", () => fileInput.click());
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
});
dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragover"));
dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    fileInput.files = e.dataTransfer.files;
});

// Encoding & Decoding Functions
function encodeMessage() {
    let file = fileInput.files[0];
    let message = document.getElementById("encodeMessage").value;
    let formData = new FormData();
    formData.append("file", file);
    formData.append("message", message);

    fetch("/encode", { method: "POST", body: formData })
        .then(response => response.blob())
        .then(blob => {
            let url = window.URL.createObjectURL(blob);
            let downloadLink = document.getElementById("downloadEncodedFile");
            downloadLink.href = url;
            document.getElementById("encodeResult").classList.remove("hidden");
        })
        .catch(() => alert("Encoding failed!"));
}

function decodeMessage() {
    let file = document.getElementById("decodeFile").files[0];
    let formData = new FormData();
    formData.append("file", file);

    fetch("/decode", { method: "POST", body: formData })
        .then(response => response.text())
        .then(message => {
            document.getElementById("decodeResult").classList.remove("hidden");
            document.getElementById("decodedMessage").innerText = message;
        })
        .catch(() => alert("Decoding failed!"));
}
