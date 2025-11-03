# 🤖 Textractor AI Agent

Textractor Agent is a powerful AI-powered service designed to extract and process text from images. It can handle multiple languages, translate text to English, and provide summaries. This agent is built with [Mastra](https://mastra.ai/) and is deployed on Mastra Cloud.

## Features

- **Text Extraction**: Extracts all visible text from an image provided as a Base64 string or a public URL.
- **Multilingual Support**: Automatically detects the language of the extracted text.
- **Translation**: Translates non-English text into English and provides both the original and translated versions.
- **Summarization**: Generates concise summaries of the extracted text upon request.
- **A2A Integration**: Exposes the agent's capabilities through an Agent-to-Agent (A2A) API endpoint.

## Technologies Used

- **[Mastra](https://mastra.ai/)**: A framework for building and deploying AI agents.
- **[AI SDK](https://sdk.vercel.ai/)**: A library for building AI-powered applications.
- **[Google Gemini](https://deepmind.google/technologies/gemini/)**: The underlying multimodal AI model for text extraction.
- **[TypeScript](https://www.typescriptlang.org/)**: The programming language used for this project.
- **[Zod](https://zod.dev/)**: For schema validation.

## Getting Started

### Prerequisites

- Node.js (v20.9.0 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sherifdeji/textractor-agent.git
   ```
2. Navigate to the project directory:
   ```bash
   cd textractor-agent
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Environment Setup

This agent requires one environment variable to run.

1. Create a .env file in the root of the project:

   ```bash
   touch .env
   ```

2. Add your Gemini API key to the .env file:
   ```bash
   TEXTRACTOR_GEMINI_API_KEY="ai...YOUR_KEY_HERE"
   ```

### Running the Project

- **Development Mode**:

  ```bash
  npm run dev
  ```

  This will start the Mastra server in development mode with hot-reloading.

- **Production Mode**:
  ```bash
  npm run build
  npm run start
  ```
  This will build the project and start the Mastra server in production mode.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm test`: (Not yet implemented) Runs tests.

## Deployment

This project is deployed on [Mastra Cloud](https://mastra.ai/cloud). The A2A endpoint is available at:

`https://telex-mastra.mastra.cloud/a2a/agent/multilingualExtractorAgent`

To interact with the agent, you can send a POST request to the endpoint with a JSON-RPC 2.0 payload(You must send a JSON-RPC 2.0 request.).

### Example Request

```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "generate",
  "params": {
    "messages": [
      {
        "role": "user",
        "parts": [
          {
            "kind": "text",
            "text": "Extract the text from this image."
          },
          {
            "kind": "data",
            "data": {
              "imageData": "YOUR_BASE64_IMAGE_DATA_OR_PUBLIC_URL"
            }
          }
        ]
      }
    ]
  }
}
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sherif Ibrahim**

---

## 🙏 Acknowledgments

- Built as part of Stage 3 assessment for [HNG Internship](https://hng.tech)

---
