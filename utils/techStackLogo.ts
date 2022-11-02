import { StackItem } from "../types/Project";

export const stackItemToLogo = (stack: StackItem): string => {
    if(stack === 'Google Cloud') return 'googlecloud';
    if(stack === 'Next.js') return 'vercel';
    if(stack === 'React Native') return 'react';
    if(stack === 'HTML & CSS') return 'html';
    return stack.toLowerCase();
}