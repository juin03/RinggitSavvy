import { create } from 'apisauce'

const api = create({
  baseURL: 'https://newsapi.org/v2',
})

const apiKey = '?country=us&apiKey=e31a0f5049a84e59a7cc8eb2fc7e4c11';
const getTopHeadlines = api.get('/top-headlines' + apiKey);

const getByCategory = (category) => api.get('/everything?q=' + category + "&apiKey=e31a0f5049a84e59a7cc8eb2fc7e4c11");

export default{
  getTopHeadlines,
  getByCategory
};

