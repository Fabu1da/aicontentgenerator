
import express, {Request, Response} from "express";
import { prompt, aiModel } from "../utils/constants";

import OpenAI from "openai";
const client = new OpenAI();

const router = express.Router();

router.post("/generateStory",  async (req:Request, res:Response) => {

    try {
        const { promptContext } = req.body;
        const storyPrompt = prompt(promptContext);

        const storyResponse = await client.chat.completions.create(
            {
                model: aiModel,
                messages: [
                    {
                        role: "user",
                        content: storyPrompt,
                    },
                ],
            }
        );

        const story = storyResponse.choices[0]?.message.content;
        res.status(200).json({ story });

    } catch (error) {
        console.error("Error generating story:", error);
        res.status(500).json({ error: "Failed to generate story" });
    }

});

module.exports = router;