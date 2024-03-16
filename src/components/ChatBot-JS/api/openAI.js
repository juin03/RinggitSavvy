import { apiKey } from '../Constant/WelcomingMessage';
import axios from 'axios';

const client = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  }
});

const chatGptEndpoint = "/chat/completions";

export const apiCall = async (prompt) => {
  try {
    const initialPrompt = `You are an exceptionally knowledgeable assistant with deep expertise in all aspects of financial literacy. Your areas of specialization include, but are not limited to, the capital market, financing, influential figures in finance, investments, stocks, bonds, market trends, economic indicators, trends and the historical and current news that shapes the economic landscape and capital markets. You are adept at analyzing the impact of monetary policies, global economic events, and the contributions of notable individuals to the financial sectors. Your role is to provide detailed, accurate information and insights into these areas, helping users understand complex financial concepts and market dynamics. Bold if necessary and add emojis to your responses to make them more engaging and informative.

    When responding to queries, ensure that your answers are comprehensive and encompass the multifaceted nature of finance and economics, including theoretical aspects, practical applications, and the latest market developments. If a question does not directly relate to these areas, or if it falls outside your domain of expertise, kindly respond with: "As a financial literacy assistant specializing in the capital market, I'm here to help with questions about investments, stocks, bonds, and market trends. Feel free to ask anything finance-related! 😊"
    `;
    const response = await client.post(chatGptEndpoint, {
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: initialPrompt
      },
      {
        role: "user",
        content: prompt,
      }]
    });
    
    // Check if the response is to ask a relevant question
    const responseContent = response.data.choices[0].message.content;
    if (responseContent.includes("not pertain to financial literacy in the capital market")) {
      return "Please ask a question related to financial literacy in the capital market.";
    }
    
    return responseContent;
  } catch (error) {
    console.error('Error making API call:', error);
    throw error;
  }
}


// import { apiKey } from '../Constant/WelcomingMessage';
// import axios from 'axios';

// const client = axios.create({
//     baseURL: "https://language.googleapis.com/v1/projects/vhack2024-ringgitsavy/locations/global",
//     headers: {
//       "Authorization": `Bearer ${apiKey}`,
//       "Content-Type": "application/json"
//     }
//   });
  

// const chatEndpoint = "/v1/projects/vhack2024-ringgitsavy/locations/global/models/gemini-pro:generateText";

// export const apiCall = async (prompt) => {
//   try {
//     const initialPrompt = `You are an exceptionally knowledgeable assistant with deep expertise in all aspects of financial literacy. Your areas of specialization include, but are not limited to, the capital market, financing, influential figures in finance, investments, stocks, bonds, market trends, economic indicators, trends and the historical and current news that shapes the economic landscape and capital markets. You are adept at analyzing the impact of monetary policies, global economic events, and the contributions of notable individuals to the financial sectors. Your role is to provide detailed, accurate information and insights into these areas, helping users understand complex financial concepts and market dynamics. Bold if necessary and add emojis to your responses to make them more engaging and informative.

//      When responding to queries, ensure that your answers are comprehensive and encompass the multifaceted nature of finance and economics, including theoretical aspects, practical applications, and the latest market developments. If a question does not directly relate to these areas, or if it falls outside your domain of expertise, kindly respond with: "As a financial literacy assistant specializing in the capital market, I'm here to help with questions about investments, stocks, bonds, and market trends. Feel free to ask anything finance-related! "`;

//     const requestBody = {
//       requests: [{
//         generateText: {
//           prompt: `${initialPrompt}${prompt}`,
//           max_length: 1024, // Adjust max response length as needed (default 1024)
//           temperature: 0.7, // Adjust temperature for response creativity (0.0-1.0)
//         }
//       }]
//     };

//     const response = await client.post(chatEndpoint, requestBody);

//     // Check for errors
//     if (response.data.error) {
//       console.error('Error making API call:', response.data.error);
//       throw new Error('API call failed');
//     }

//     const generatedText = response.data.responses[0].generatedText;
//     if (generatedText.includes("not pertain to financial literacy in the capital market")) {
//       return "Please ask a question related to financial literacy in the capital market.";
//     }

//     return generatedText;
//   } catch (error) {
//     console.error('Error making API call:', error);
//     throw error;
//   }
// };
