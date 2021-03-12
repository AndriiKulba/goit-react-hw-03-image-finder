import axios from 'axios';
// axios.defaults.baseURL =
//   'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
// axios.defaults.headers.common['Authorization'] =
//   'Bearer 19823540-1f511813796e20603cd716e3a';
const FetchImages = () => {
  return axios
    .get(
      'https://pixabay.com/api/?image_type=photo&orientation=horizontal&key=19823540-1f511813796e20603cd716e3a',
    )
    .then(response => response.data.hits);
};
export default { FetchImages };

// const API_KEY = '19823540-1f511813796e20603cd716e3a';
// const BASE_URL =
//   'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

// export default class NewApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchArticles() {
//     const searchParams = new URLSearchParams({
//       q: this.searchQuery,
//       page: this.page,
//       per_page: 12,
//       key: API_KEY,
//     });
//     const url = `${BASE_URL}&${searchParams}`;
//     console.log(url);
//     // https://pixabay.com/api/?&image_type=photo&q=yellow+flowers&page=номер_страницы&per_page=12&key=19823540-1f511813796e20603cd716e3a

//     return fetch(url)
//       .then(response => response.json())
//       .then(({ hits }) => hits);
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
