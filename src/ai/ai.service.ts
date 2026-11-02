import { Injectable, Logger } from '@nestjs/common';
import { SynthesizeTaskDto } from './dto/synthesize-task.dto';
import { AiSynthesisResponseDto } from './dto/ai-response.dto';

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);

  async synthesize(dto: SynthesizeTaskDto): Promise<AiSynthesisResponseDto> {
    const geminiKey = process.env.GEMINI_API_KEY || process.env.AI_API_KEY;
    const openAiKey = process.env.OPENAI_API_KEY;

    // 1. Try Gemini API if key is present
    if (geminiKey && geminiKey.length > 10) {
      try {
        return await this.callGemini(dto.rawInput, geminiKey);
      } catch (err: any) {
        this.logger.warn(`Gemini API call failed (${err.message}). Trying fallback.`);
      }
    }

    // 2. Try OpenAI API if key is present
    if (openAiKey && openAiKey.startsWith('sk-')) {
      try {
        return await this.callOpenAi(dto.rawInput, dto.model || 'gpt-4o-mini', openAiKey);
      } catch (err: any) {
        this.logger.warn(`OpenAI API call failed (${err.message}). Trying fallback.`);
      }
    }

    // 3. Resilient Academic Heuristic Engine
    return this.heuristicSynthesize(dto.rawInput);
  }

  private async callGemini(input: string, apiKey: string): Promise<AiSynthesisResponseDto> {
    const prompt = `You are an expert academic research and software engineering supervisor for a Final Year CS Project.
Analyze the following raw input and return a JSON object with this exact structure:
{
  "suggestedTitle": "Concise technical milestone title",
  "structuredDescription": "Detailed academic and technical scope description",
  "suggestedPriority": "LOW" | "MEDIUM" | "HIGH" | "CRITICAL",
  "aiSummary": "1-2 sentence executive research synthesis",
  "actionItems": ["action item 1", "action item 2", "action item 3"],
  "suggestedTags": ["Tag1", "Tag2", "Tag3"]
}

Raw Input:
"${input}"`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.2,
        },
      }),
    });

    if (!res.ok) {
      throw new Error(`Gemini HTTP ${res.status}: ${res.statusText}`);
    }

    const data: any = await res.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error('No candidate content from Gemini');

    const parsed = JSON.parse(rawText);
    return {
      suggestedTitle: parsed.suggestedTitle || 'Synthesized FYP Milestone',
      structuredDescription: parsed.structuredDescription || input,
      suggestedPriority: parsed.suggestedPriority || 'HIGH',
      aiSummary: parsed.aiSummary || 'Milestone formalized via Google Gemini neural model.',
      actionItems: parsed.actionItems || ['Formalize research requirements', 'Execute empirical benchmark runs'],
      suggestedTags: parsed.suggestedTags || ['Research', 'UniBench', 'FYP'],
      engineUsed: 'Google Gemini 1.5 Flash (Live Cloud AI)',
    };
  }

  private async callOpenAi(input: string, model: string, apiKey: string): Promise<AiSynthesisResponseDto> {
    const prompt = `You are an expert academic research assistant for a Final Year CS Project. Analyze the following raw text and extract structured task attributes in JSON format:
{
  "suggestedTitle": "Concise imperative action title",
  "structuredDescription": "Clean technical requirements breakdown",
  "suggestedPriority": "LOW" | "MEDIUM" | "HIGH" | "CRITICAL",
  "aiSummary": "1-2 sentence executive summary",
  "actionItems": ["step 1", "step 2"],
  "suggestedTags": ["tag1", "tag2"]
}

Raw Input:
"${input}"`;

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
        temperature: 0.3,
      }),
    });

    if (!res.ok) {
      throw new Error(`OpenAI HTTP ${res.status}: ${res.statusText}`);
    }

    const json: any = await res.json();
    const parsed = JSON.parse(json.choices[0].message.content);

    return {
      suggestedTitle: parsed.suggestedTitle || 'New Synthesized Milestone',
      structuredDescription: parsed.structuredDescription || input,
      suggestedPriority: parsed.suggestedPriority || 'MEDIUM',
      aiSummary: parsed.aiSummary || 'Task synthesized via OpenAI LLM pipeline.',
      actionItems: parsed.actionItems || [],
      suggestedTags: parsed.suggestedTags || ['AI', 'Research', 'FYP'],
      engineUsed: `OpenAI ${model}`,
    };
  }

  private heuristicSynthesize(input: string): AiSynthesisResponseDto {
    const lower = input.toLowerCase();

    let priority = 'MEDIUM';
    if (lower.includes('critical') || lower.includes('blocker') || lower.includes('chapter 4') || lower.includes('viva')) {
      priority = 'CRITICAL';
    } else if (lower.includes('urgent') || lower.includes('supervisor') || lower.includes('next month') || lower.includes('immediate')) {
      priority = 'HIGH';
    } else if (lower.includes('low') || lower.includes('minor') || lower.includes('optional') || lower.includes('future work')) {
      priority = 'LOW';
    }

    const tags: string[] = ['UniBench', 'FYP'];
    if (lower.includes('memrist') || lower.includes('crossbar')) tags.push('Memristor', 'Hardware');
    if (lower.includes('photonic') || lower.includes('optical')) tags.push('Photonics', 'Optics');
    if (lower.includes('neuromorphic') || lower.includes('neural')) tags.push('Neuromorphic', 'NeuralComputing');
    if (lower.includes('joule') || lower.includes('energy') || lower.includes('power')) tags.push('EnergyMetrics', 'JoulesPerMAC');
    if (lower.includes('benchmark') || lower.includes('eval') || lower.includes('latency')) tags.push('Benchmarking', 'Telemetry');
    if (lower.includes('thesis') || lower.includes('dissertation') || lower.includes('paper')) tags.push('Dissertation', 'Thesis');

    const sentences = input.split(/[.\n?!]/).map((s) => s.trim()).filter((s) => s.length > 5);
    const primarySentence = sentences[0] || input;
    const suggestedTitle = primarySentence.length > 70 ? primarySentence.substring(0, 67) + '...' : primarySentence;

    const actionItems = sentences.length > 1
      ? sentences.slice(1, 4).map((s) => `Research Task: ${s}`)
      : [
          'Formulate substrate hardware abstraction specifications',
          'Execute empirical simulation and collect telemetry data',
          'Draft comparative benchmark findings for dissertation chapter',
        ];

    return {
      suggestedTitle,
      structuredDescription: `Structured engineering scope derived from research input:\n\n${input}`,
      suggestedPriority: priority,
      aiSummary: `Formalized research milestone classified across domain tags (${tags.join(', ')}).`,
      actionItems,
      suggestedTags: Array.from(new Set(tags)),
      engineUsed: 'Academic Heuristic Rule Engine (Gemini / OpenAI Compatible)',
    };
  }
}
