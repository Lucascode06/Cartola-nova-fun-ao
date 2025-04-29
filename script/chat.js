document.getElementById('chatButton').addEventListener('click', function() {
    document.getElementById('chatSidebar').classList.toggle('open');
});

document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatSidebar').classList.remove('open');
});
