import axios from 'axios';
const API = 'http://localhost:8080/books';

export const getAllBooks = () => axios.get(API);
export const getBookById = (id) => axios.get(`${API}/${id}`);
export const createBook = (book) => axios.post(API, book);
export const updateBook = (id, book) => axios.put(`${API}/${id}`, book);
export const deleteBook = (id) => axios.delete(`${API}/${id}`);
