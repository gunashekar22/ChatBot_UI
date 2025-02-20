
document.addEventListener("DOMContentLoaded", function () {
    // Extract search query from URL
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");

    if (query) {
        document.getElementById("queryText").textContent = "You searched for: " + query;

        // Example data (Replace this with your actual processing)
        const data = "Artificial Intelligence (AI) has revolutionized the way we interact with technology. From voice assistants like Siri and Alexa to recommendation systems on Netflix and Amazon, AI is now deeply integrated into our daily lives. Businesses leverage AI for automation, predictive analytics, and personalized marketing, enhancing efficiency and customer satisfaction. However, ethical concerns such as data privacy, bias in AI models, and job displacement continue to be major challenges. As AI continues to evolve, balancing innovation with ethical responsibility will be crucial for its sustainable development.";

        // Display summarized result
        document.getElementById("summary").textContent = data;
    } else {
        document.getElementById("queryText").textContent = "No query provided.";
    }

    
});


document.getElementById('backButton').addEventListener('click', function() {
    // Redirect to index.html
    window.location.href = 'index.html';
  });



document.getElementById('editButton').addEventListener('click', function() {
    // Extract search query from URL
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");

    // Redirect to index.html with the search query as a URL parameter
    window.location.href = `index.html?query=${encodeURIComponent(query)}`;
});


