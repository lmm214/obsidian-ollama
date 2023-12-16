import { OllamaSettings } from "model/OllamaSettings";

export const DEFAULT_SETTINGS: OllamaSettings = {
  "ollamaUrl": "http://127.0.0.1:11435",
  "stream": true,
  "defaultModel": "mistral",
  "commands": [
    {
      "name": "Summarize selection / 概括全文",
      "prompt": "Act as a writer. Summarize the text in a view sentences highlighting the key takeaways. Output only the text and nothing else, do not chat, no preamble, get to the point.Only respond in Chinese."
    },
    {
      "name": "Explain selection / 解释文本",
      "prompt": "Act as a writer. Explain the text in simple and concise terms keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.Only respond in Chinese."
    },
    {
      "name": "Expand selection / 扩展文本",
      "prompt": "Act as a writer. Expand the text by adding more details while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.Only respond in Chinese."
    },
    {
      "name": "Rewrite selection (formal) / 更改文本1",
      "prompt": "Act as a writer. Rewrite the text in a more formal style while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.Only respond in Chinese."
    },
    {
      "name": "Rewrite selection (casual) / 更改文本2",
      "prompt": "Act as a writer. Rewrite the text in a more casual style while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.Only respond in Chinese."
    },
    {
      "name": "Rewrite selection (active voice) / 更改文本3",
      "prompt": "Act as a writer. Rewrite the text in with an active voice while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.Only respond in Chinese."
    },
    {
      "name": "Rewrite selection (bullet points) / 提炼要点",
      "prompt": "Act as a writer. Rewrite the text into bullet points while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.Only respond in Chinese."
    },
    {
      "name": "Caption selection / 创建标题",
      "prompt": "Act as a writer. Create only one single heading for the whole text that is giving a good understanding of what the reader can expect. Output only the caption and nothing else, do not chat, no preamble, get to the point. Your format should be ## Caption.Only respond in Chinese."
    },
    {
      "name": "Translate selection (English) / 翻译英文",
      "prompt": "Act as a translator. Translate the text in English. Output only the text and nothing else, do not chat, no preamble, get to the point."
    }
  ]
};
