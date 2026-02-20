import { GoogleGenAI } from "@google/genai";

export async function generateLogoImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'CRITICAL: Generate a professional 3D metallic shield logo for "URBAN FITNESS" on a PURE TRANSPARENT BACKGROUND (Alpha Channel). NO background color, NO white box, NO black box, NO shadows on the background. The shield must have a brushed silver frame with visible screws and a glossy black interior. "URBAN" arched at top in silver. "FITNESS" arched at bottom in bold 3D orange-gold. Silhouettes of a silver female and orange male in center. High-resolution PNG, isolated, transparent background only.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
