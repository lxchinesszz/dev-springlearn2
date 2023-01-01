import axios from 'axios';

export default function defaultPlaceholder() {
  return axios.get('https://v1.hitokoto.cn');
}
