import { ChatGPTAPIBrowser } from 'chatgpt';

const api = new ChatGPTAPIBrowser({
  email: 'email',
  password: 'password'
});
await api.initSession();

export default api;
