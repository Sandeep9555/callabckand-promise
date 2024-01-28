async function fetchDataFromMultipleAPIs() {
    try {
        const [todoResponse, postResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/1")
        ]);

        const todoData = await todoResponse.json();
        const postData = await postResponse.json();

        const combinedResult = { todo: todoData, post: postData };
        console.log("Combined Result:", combinedResult);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Example usage:
fetchDataFromMultipleAPIs();
