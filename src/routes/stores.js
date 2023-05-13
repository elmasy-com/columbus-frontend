import { writable } from 'svelte/store';

export const statTotal = writable(0);
export const statTld = writable(0);
export const statDomain = writable(0);
export const statFullDomain = writable(0);
export const statSub = writable(0);