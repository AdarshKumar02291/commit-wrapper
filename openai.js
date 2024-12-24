const axios = require("axios");

const generateCommitMessage = async (diff) => {
    const apiKey = ""; // Replace with your API key
    const apiEndpoint = "https://api.openai.com/v1/chat/completions";

    const payload = {
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: "You are a tool to generate commit messages following FreeCodeCamp's style."
            },
            {
                role: "user",
                content: `Generate a commit message for the following code changes:\n\n${diff}`
            }
        ]
    };

    try {
        const response = await axios.post(apiEndpoint, payload, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            }
        });

        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error generating commit message:", error.response.data);
        return "Error generating commit message.";
    }
};

module.exports = { generateCommitMessage };
