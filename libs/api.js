import axios from 'axios';

const $api = axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: 'UgolinOlle',
    password: process.env['GITHUB_TOKEN'],
  },
});

export default $api;