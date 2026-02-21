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
            text: 'A professional, high-resolution shield logo for "URBAN FITNESS". The shield has a polished silver/chrome frame with visible industrial screws. The interior of the shield is matte black. At the top, the word "URBAN" is arched in a bold, metallic silver font. At the bottom, the word "FITNESS" is in a bold, heavy sans-serif font with a vibrant orange-to-gold gradient. In the center, there are two silhouettes: a silver/white female on the left and a vibrant orange male on the right, both flexing and holding dumbbells, facing away from each other. A subtle white arc separates the silhouettes from the bottom text. Gym branding, high quality, 3D effect.',
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
