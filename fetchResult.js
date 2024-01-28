async function fetchDataAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Example usage:
fetchDataAsync();
