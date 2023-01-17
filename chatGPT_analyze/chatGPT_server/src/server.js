import express from 'express';
import { Base64 } from 'js-base64';
import chatGPTApi from './chatGPT.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000;

app.post('/api/chatGPT', async (req, res) => {
  const {
    encodeContent,
    conversationId,
    messageId
  } = req.body;

  const decodeContent = Base64.decode(encodeContent);
  let r;

  if (conversationId && messageId) {
    r = await chatGPTApi.sendMessage(decodeContent, {
      conversationId: conversationId,
      parentMessageId: messageId
    });
  } else {
    r = await chatGPTApi.sendMessage(decodeContent);
  }
  
  res.status(200).json({
    conversationId: r.conversationId,
    messageId: r.messageId,
    content: r.response
  });
});


app.listen(port, () => {
  console.log(`chatGPT app listening on port ${port}`)
});
