import { Agent } from '@mastra/core/agent';
import { google } from '@ai-sdk/google';
import { textExtractorTool } from '../tools/textractor-tool';

export const multilingualExtractorAgent = new Agent({
  name: 'multilingual-extractor-agent',
  instructions: `You are a highly skilled text extraction and translation agent. 
    Your primary function is to extract text from an image using the provided tool.
    Once text is extracted, analyze its language. 
    If the text is not in English, you must translate it into English and provide both the original and the English translation.
    If the text is already English, just return the extracted text.
    If the image contains no text, respond with "No text found in the image."
    If the user requests for a summary, provide a concise summary of the extracted text.
    Always be concise and professional in your final response.`,
  model: google('gemini-2.5-flash'), // Agent uses a capable LLM that can reason and use tools
  tools: {
    textExtractorTool, // Grant the agent access to the tool
  },
});
