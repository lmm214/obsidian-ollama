# 🦙 Obsidian Ollama

This is a plugin for [Obsidian](https://obsidian.md) that allows you to use [Ollama](https://ollama.ai) within your notes.
There are different pre configured promts:

    - Summarize selection
    - Explain selection
    - Expand selection
    - Rewrite selection (formal)
    - Rewrite selection (casual)
    - Rewrite selection (active voice)
    - Rewrite selection (bullet points)
    - Caption selection

But you can also configure your own prompts, specify their model and temperature. The plugin always passes the prompt and either selected text or full note to Ollama and inserts the result into your note at the cursor position.

This requires a local installation of [Ollama](https://ollama.ai) which can currently be installed as a [MacOS app](https://github.com/jmorganca/ollama#download). By default the plugin will connect to `http://localhost:11434` - the port of the MacOS app.


### DIY

- 把原项目里的 PR 手动合在了一起
- 加了中文提示
- 修改默认模型为 `mistral`

`OLLAMA_ORIGINS=*,app://obsidian.md* OLLAMA_HOST=127.0.0.1:11435 ollama serve`

![iShot_2023-12-16_22 25 17-zipic](https://github.com/lmm214/obsidian-ollama/assets/1472390/d6ec4862-6846-4def-9f59-669d2e02b785)

