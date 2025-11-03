import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

// Define the input schema for the tool using Zod for type safety
const inputSchema = z.object({
  imageData: z
    .string()
    .describe('The image data as a Base64 encoded string or a public URL.'),
});

// Define the output schema
const outputSchema = z.object({
  extractedText: z.string().describe('The text extracted from the image.'),
});

export const textExtractorTool = createTool({
  id: 'extract-text-from-image',
  description:
    'Extracts all visible text from an image, which can be provided as a Base64 string or a public URL.',
  inputSchema,
  outputSchema,
  execute: async ({ context }) => {
    const { imageData } = context;

    // The core logic uses the AI SDK and a multimodal model
    const result = await generateText({
      model: google('gemini-2.5-flash'),
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Extract all the text from this image as a single block of plain text. Do not add any introductory phrases.',
            },
            { type: 'image', image: imageData },
          ],
        },
      ],
    });

    return {
      extractedText: result.text,
    };
  },
});
