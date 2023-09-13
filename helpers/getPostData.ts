// import { ISinglePost } from '@/types/posts';
// import fs from 'fs/promises';
// import path from 'path';
// import { cwd } from 'process';

// const pathName = path.join(cwd(), '../data/posts.json');

// export async function getPostsData() {
//   try {
//     // Read the JSON file
//     const rawData = await fs.readFile(pathName);

//     // Parse the JSON data
//     const jsonData = JSON.parse(rawData.toString());

//     // Now you can work with the jsonData object
//     console.log('Read data:', jsonData);

//     return jsonData;
//   } catch (error) {
//     console.error('Error reading file:', error);
//   }
// }
