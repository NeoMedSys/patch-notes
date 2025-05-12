import { patch as v110b } from './v1.1.0b';
import { patch as v100b } from './v1.0.0b';
import { patch as v120b } from './v1.2.0b';
import { PatchVersion } from '@/types/patch-notes';

// Add new patches at the start of the array
export const patchNotes: PatchVersion[] = [
  v120b,
  v110b,
  v100b

];