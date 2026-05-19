export const aiModel = "gpt-4o-mini";

export const prompt = (promptContext: { context: string; length: number }) =>{


    //TODO:
    /*
    1- Understand prompts
    2- Adjust Generate story prompt to make more intresting/Professional

    */

    return `
You are a storyteller. 

Tell me a story about ${promptContext.context}. 
The story should be ${promptContext.length} words long.

Make sure to include a clear beginning, middle, and end.
Use vivid descriptions and engaging dialogue to bring the story to life.
The story should be suitable for all ages.  
use the real names of the people involved in the story, if any.
use the current people, and this must regit
only make the story about funny incidents that happened to the people involved in the story, if any.   
`;
}


