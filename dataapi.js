async function fetchDataAndDisplay() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("Data Retrieved:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Example usage:
fetchDataAndDisplay();
