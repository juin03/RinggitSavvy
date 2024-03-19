import { create } from 'apisauce'

const api = create({
  baseURL: 'https://newsapi.org/v2',
})

// const apiKey = '?country=us&apiKey=2a13e290a37e4d60a354b0152c5ca099';
const apiKey = '?country=us&apiKey=3bcc14624d7f4564a314362000cfaa90';
const getTopHeadlines = api.get('/top-headlines' + apiKey);

// const getByCategory = (category) => api.get('/everything?q=' + category + "&apiKey=2a13e290a37e4d60a354b0152c5ca099");
const getByCategory = (category) => api.get('/everything?q=' + category + "&apiKey=3bcc14624d7f4564a314362000cfaa90");

export default{
  getTopHeadlines,
  getByCategory
};