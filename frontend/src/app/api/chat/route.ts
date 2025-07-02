import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing OpenAI API key' }, { status: 500 });
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.2,
    }),
  });

  const data = await response.json();
  if (data.error) {
    return NextResponse.json({ error: data.error.message }, { status: 500 });
  }

  const aiMessage = data.choices?.[0]?.message?.content || 'Sorry, no response.';
  return NextResponse.json({ message: aiMessage });
}
