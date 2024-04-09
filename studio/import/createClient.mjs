import { createClient } from '@sanity/client';

const API_TOKEN = 'skqlHpmudqkh70DP34TAa0ZAEBLpV5qkLF0OV8orxOIt04IBSGWtFWWbcYSG9EWZ4z74gCbpEj4f7K6Vak3y9NVTvAlqecv8fDB1CwiDSlpVmTTvcMozclCWL1NRA2Kdph2WmmgalWtoumXYEg9ll6KZlf2Bw9Psrty8OBYtJAyy8yHWDQUF';

export const client = createClient({
  projectId: 'jazosh68',
  dataset: 'production',
  token: API_TOKEN,
  useCdn: false,
  apiVersion: '2024-03-19'
});

export const nameToId = (name, type) => `import-${type}-${name.replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '-')}`.toLowerCase();