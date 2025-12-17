import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Hotjobsconnect AI Assistant", a specialized HR and Payroll expert embedded within the Hotjobsconnect Payroll System for the Nigerian market.

Your Core Knowledge Base:
1. **Nigerian Payroll Compliance**: You are an expert in PAYE (Personal Income Tax Act), Pension Reform Act 2014 (8% employee, 10% employer), NHF (National Housing Fund - 2.5%), and ITF.
2. **Hotjobsconnect Ecosystem**: You know about the recruitment marketplace, background checks (BVN/NIN), and training upselling.
3. **HR Best Practices**: You can draft offer letters, termination notices, and performance improvement plans.

Your Capabilities:
- Analyze payroll discrepancies (e.g., "Why is tax higher this month?").
- Suggest recruitment strategies based on job descriptions using Hotjobsconnect talent pool.
- Predict employee attrition based on patterns.

Tone: Professional, local context aware (Naira, Nigerian laws), and helpful.
Keep responses concise and formatted with Markdown.
`;

// For standard chat interactions
export const generateHRResponse = async (prompt: string, history: { role: 'user' | 'model'; text: string }[] = []) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash', // Fast model for chat
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: prompt });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to the Hotjobsconnect AI brain right now. Please ensure your API Key is valid.";
  }
};

// For complex analysis (Attrition prediction, Salary Benchmarking)
// Uses the more powerful Gemini 3 Pro Preview model
export const generateDeepInsights = async (dataContext: string, query: string) => {
  try {
    const prompt = `
      Context Data: ${dataContext}
      
      Query: ${query}
      
      Perform a deep analysis. If this is about salary, compare with Nigerian market standards. 
      If this is about attrition, look for risk factors.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview', // Powerful model for reasoning
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 2048 } // Enable thinking for complex analysis
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Deep Insight Error", error);
    return "Analysis unavailable at the moment.";
  }
};

export const analyzeCandidateCV = async (jobDescription: string, candidateSummary: string) => {
  try {
    const prompt = `
      Job Description: ${jobDescription}
      Candidate Profile: ${candidateSummary}
      
      Task: Score this candidate from 0-100 based on fit for a Nigerian tech company.
      Output JSON: { "score": number, "reason": "string" }
    `;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Candidate Analysis Error", error);
    return JSON.stringify({ score: 0, reason: "Analysis failed." });
  }
}