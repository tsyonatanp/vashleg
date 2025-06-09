interface TelegramMessage {
  serviceId: string;
  name: string;
  phone: string;
  address: string;
  description: string;
}

export async function sendToTelegram(data: TelegramMessage) {
  const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error('Telegram configuration is missing');
  }

  const message = `
🎯 פנייה חדשה

✨ שירות: ${data.serviceId}
👤 שם: ${data.name}
📱 טלפון: ${data.phone}
📍 כתובת: ${data.address}
📝 תיאור: ${data.description}

💫 יצירת קשר: https://wa.me/${data.phone.replace(/\D/g, '')}
  `.trim();

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to send message to Telegram');
  }

  return response.json();
} 