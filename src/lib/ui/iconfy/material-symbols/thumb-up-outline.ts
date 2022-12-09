  import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

  addCollection({
    prefix: 'material-symbols',
    icons: {
      'thumb-up-outline': {
        body: `
          <path
            fill="currentColor"
            d="M18 21H7V8l7-7l1.25 1.25q.175.175.288.475q.112.3.112.575v.35L14.55 8H21q.8 0 1.4.6q.6.6.6 1.4v2q0 .175-.05.375t-.1.375l-3 7.05q-.225.5-.75.85T18 21Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85ZM9 8.85V19ZM7 8v2H4v9h3v2H2V8Z"
          />
          `
          .trim()
          .replace(/\s{2,}/g, ' ')
          .replace(/\n/g, '')
        }
    },
    width: 24,
    height: 24
  });
