import { writable } from 'svelte/store';

export const load = async ({ parent, data }) => {
    return {
        ...(await parent()),
        ...data,
        currentCharacter: writable(data.characterFromSanity),
    };
};