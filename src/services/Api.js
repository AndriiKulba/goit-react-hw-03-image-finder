import axios from 'axios';
const KEY = '19823540-1f511813796e20603cd716e3a';
axios.defaults.baseURL = 'https://pixabay.com/api';

const FetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  let url = `?image_type=photo&orientation=horizontal&key=${KEY}&q=${searchQuery}&page=${currentPage}&per_page=${pageSize}`;
  return axios.get(url).then(response => response.data.hits);
};

export default { FetchImages };
