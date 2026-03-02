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
    const container = document.getElementById('data-container');
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
        container.appendChild(div);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});