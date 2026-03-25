 const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("response");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        showMessage("Please fill all fields!", "red");
        return;
    }

    const data = { name, email, message };

    try {
        showMessage("Sending message...", "#ff69b4");

        const res = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        showMessage(result.message, "green");
        form.reset();

    } catch (error) {
        showMessage("Server error! Try again later.", "red");
    }
});

function showMessage(msg, color) {
    responseMsg.innerText = msg;
    responseMsg.style.color = color;
}