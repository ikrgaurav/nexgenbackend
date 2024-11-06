const axios = require('axios');

exports.translateText = async (req, res) => {
  const { text, targetLang } = req.body;

  // Validate input
  if (!text || !targetLang) {
    return res.status(400).json({ success: false, message: 'Text and targetLang are required' });
  }

  try {
    const response = await axios.post(`https://translation.googleapis.com/language/translate/v2`, null, {
      params: {
        q: text,
        target: targetLang,
        key: process.env.GOOGLE_TRANSLATE_API_KEY
      }
    });

    const translatedText = response.data.data.translations[0].translatedText;
    res.status(200).json({ success: true, translatedText });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Error during translation', error: error.message });
  }
};
