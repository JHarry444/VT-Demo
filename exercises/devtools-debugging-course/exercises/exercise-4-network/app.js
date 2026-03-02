const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const displayData = (data) => {
    const dataContainer = document.getElementById('data-container');
    data.forEach(item => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
        dataContainer.appendChild(postElement);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});