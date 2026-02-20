import { GoogleGenAI } from "@google/genai";

export async function generateLogoImage() {
  const CACHE_KEY = 'urban_fitness_logo_cache';
  
  // Try to get from cache first
  const cachedLogo = localStorage.getItem(CACHE_KEY);
  if (cachedLogo) {
    return cachedLogo;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A high-quality, 3D metallic shield logo for "URBAN FITNESS". The shield has a brushed silver frame with visible screws and a glossy black interior. At the top, the word "URBAN" is arched in metallic silver. At the bottom, the word "FITNESS" is arched in bold, 3D orange-gold gradient text. In the center, there are two silhouettes: a silver female on the left and an orange male on the right, both holding dumbbells and facing away from each other. Professional, high-resolution, gym branding.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    if (response.candidates && response.candidates[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const logoData = `data:image/png;base64,${part.inlineData.data}`;
          // Cache the result
          localStorage.setItem(CACHE_KEY, logoData);
          return logoData;
        }
      }
    }
  } catch (error: any) {
    // Check for quota exceeded error (429)
    const isQuotaExceeded = 
      error?.message?.includes('429') || 
      error?.status === 429 || 
      error?.error?.code === 429 ||
      JSON.stringify(error).includes('429');

    if (isQuotaExceeded) {
      console.warn("Gemini API quota exceeded for logo generation. Using fallback SVG logo.");
    } else {
      console.error("Error generating logo with Gemini:", error);
    }
  }
  
  return null;
}
