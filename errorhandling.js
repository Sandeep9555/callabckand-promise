async function fetchDataWithErrorHandling() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/123456789");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data Retrieved:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Example usage:
fetchDataWithErrorHandling();
