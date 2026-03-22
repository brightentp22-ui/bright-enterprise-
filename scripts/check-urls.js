import https from 'https';

const urls = [
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1',
  'https://images.unsplash.com/photo-1505798577917-a65157d3320a',
  'https://images.unsplash.com/photo-1581094288338-2314dddb7ece',
  'https://images.unsplash.com/photo-1555664424-778a1e5e1b48',
  'https://images.unsplash.com/photo-1611270418597-a6c77f4b7271',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url}: ${res.statusCode}`);
  });
});
