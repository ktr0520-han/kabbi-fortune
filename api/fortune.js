export default async function handler(req, res) {
  // CORS 허용
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: '허용되지 않는 방법입니다.' });
  }

  const { prompt, system } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: '질문을 입력해주세요.' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        system: system || `당신은 '깨비아씨'입니다. 한국의 신비로운 운세 전문가 캐릭터로, 따뜻하고 신비로우며 때로는 장난기 있는 말투로 운세를 알려줍니다. 
반드시 한국어로만 답변하세요. 
이모지를 적절히 사용하세요.
운세는 긍정적이지만 현실적으로, 너무 뻔하지 않게 개성 있게 말해주세요.
답변은 200자 이내로 간결하게.`,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const text = data.content?.map(c => c.text || '').join('') || '운세를 불러오지 못했어요 😥';
    return res.status(200).json({ result: text });

  } catch (error) {
    console.error('api 오류:', error);
    return res.status(500).json({ error: '서버 오류가 발생했어요. 잠시 후 다시 시도해주세요.' });
  }
}
