document.addEventListener('DOMContentLoaded', () => {
    fetch('https://resumevisitorapi.azurewebsites.net/api/VisitorCountFunction')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitorCount').innerText = data.visitorCount;
        })
        .catch(error => console.error('Error fetching visitor count:', error));
});
