import axios from 'axios';

const url = 'http://restful-api-laravel-7.herokuapp.com/api/';
const config = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchLogin = formData => axios.post(url + 'login', formData);
export const fetchTodos = token => axios.get(url + 'todo', config(token));
