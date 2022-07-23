let puppeteer = require('puppeteer-extra');
let pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());

puppeteer = require('puppeteer')

async function scrapeAddress(url){
    const browser = await puppeteer.launch({headless:true});

    const page = await browser.newPage();
    await page.goto(url,{waitUntil: 'networkidle0'});

    const [el] = await page.$x('//*[@id="__next"]/div[1]/div/div[3]/div[2]/div[1]/div[2]/div[2]/div/div[1]/img')
    const src1 = await el.getProperty('src');
    const srcTxt1 = await src1.jsonValue();

    const [el11] = await page.$x('//*[@id="__next"]/div[1]/div/div[3]/div[2]/div[1]/div[2]/div[2]/div/div[2]')
    const src11 = await el11.getProperty('textContent');
    const style1 = await src11.jsonValue();

    const [el12] = await page.$x('//*[@id="__next"]/div[1]/div/div[3]/div[2]/div[1]/div[2]/div[3]')
    const src12 = await el12.getProperty('textContent');
    const price1 = (await src12.jsonValue()).replace('Price', '')



    const [el2] = await page.$x('//*[@id="__next"]/div[1]/div/div[3]/div[2]/div[1]/div[3]/div[2]/div/div[1]/img')
    const src2 = await el2.getProperty('src');
    const srcTxt2 = await src2.jsonValue(); 

    const [el13] = await page.$x('//*[@id="__next"]/div[1]/div/div[3]/div[2]/div[1]/div[3]/div[2]/div/div[2]')
    const src13 = await el13.getProperty('textContent');
    const style2 = await src13.jsonValue();

    const [el14] = await page.$x('//*[@id="__next"]/div[1]/div/div[3]/div[2]/div[1]/div[3]/div[3]')
    const src14 = await el14.getProperty('textContent');
    const price2 = (await src14.jsonValue()).replace('Price', '');

  

    const [el3] = await page.$x('//*[@id="__next"]/div[1]/div/div[3]/div[2]/div[1]/div[4]/div[2]/div/div[1]/img')
    const src3 = await el3.getProperty('src');
    const srcTxt3 = await src3.jsonValue();

    const [el15] = await page.$x('//*[@id="__next"]/div[1]/div/div[3]/div[2]/div[1]/div[4]/div[2]/div/div[2]')
    const src15 = await el15.getProperty('textContent');
    const style3 = await src15.jsonValue();

    const [el16] = await page.$x('//*[@id="__next"]/div[1]/div/div[3]/div[2]/div[1]/div[2]/div[3]')
    const src16 = await el16.getProperty('textContent');
    const price3 = (await src16.jsonValue()).replace('Price', '');


console.log({price3}, {style3})
    
    browser.close();
}

scrapeAddress("https://www.watchindex.co/market")