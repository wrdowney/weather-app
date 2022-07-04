import weatherCard from './weatherCard';

const searchBar = document.querySelector('.search');

searchBar.addEventListener('search', () => {
    const location = searchBar.value;
    weatherCard(location);
});
