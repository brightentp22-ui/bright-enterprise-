import https from 'https';
import http from 'http';

const urls = [
  'https://realtynmore.com/rcube-monad-mall-opens-at-sector-43-noida/',
  'https://www.parasbuildtech.com/property/paras-one33',
  'https://www.omaxe.com/blog/top-features-of-omaxe-chowk-mall-in-delhi/',
  'https://myrealestate.in/project/noida-bhutani-cyberthum-rp65197/',
  'https://realtyassistant.in/property/eon-fairfox-sector-140-noida',
  'https://www.indiamart.com/proddetail/alphathum-commercial-office-space-15690787833.html',
  'https://yapitahealth.com/en/facility/blk-super-speciality-hospital-new-delhi-india',
  'https://myrealestate.in/project/noida-sector-150-tribeca-city-center-150/',
  'https://mgmhealthcare.in/careers/our-culture/'
];

function fetchOgImage(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta\s+(?:property|name)=["']og:image["']\s+content=["']([^"']+)["']/i);
        if (match) {
          resolve({ url, image: match[1] });
        } else {
          resolve({ url, image: 'NOT_FOUND' });
        }
      });
    }).on('error', (err) => {
      resolve({ url, image: 'ERROR: ' + err.message });
    });
  });
}

async function run() {
  for (const url of urls) {
    const result = await fetchOgImage(url);
    console.log(`${result.url} -> ${result.image}`);
  }
}

run();
