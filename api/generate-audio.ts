import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not set" });
    }

    const ai = new GoogleGenAI({ apiKey }) as any;
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const response = await model.generateContent({
      contents: [{ parts: [{ text: `Ти си професионален български радио говорител. Твоят глас е дълбок, мъжествен и вдъхва доверие. Прочети следния рекламен текст за AquaSelf на отличен български език, плавно и с правилна интонация: ${prompt}` }] }],
      generationConfig: {
        responseModalities: ["audio" as any],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Fenrir' },
          },
        } as any,
      },
    });

    const audioPart = response.response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
    const base64Audio = audioPart?.inlineData?.data;

    if (base64Audio) {
      res.json({ audio: base64Audio });
    } else {
      res.status(500).json({ error: "Failed to generate audio" });
    }
  } catch (error: any) {
    console.error("Audio generation error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
}
