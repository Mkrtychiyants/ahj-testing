import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Visa form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000/';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      // slowMo: 500,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should add .valid class for valid visa', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=innogrn-form-widget]');
    const input = await form.$('[data-id=innogrn-input]');
    await input.type('4024007171909962');
    const submit = await form.$('[data-id=innogrn-submit]');
    submit.click();
    await page.waitForSelector('[data-id=innogrn-input].valid');
    await page.waitForSelector('img.icon.active');
  });
  test('should add .valid class for valid mir', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=innogrn-form-widget]');
    const input = await form.$('[data-id=innogrn-input]');
    await input.type('2024007171909962');
    const submit = await form.$('[data-id=innogrn-submit]');
    submit.click();
    await page.waitForSelector('img.icon.active');
  });
  test('should add .valid class for valid AE', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=innogrn-form-widget]');
    const input = await form.$('[data-id=innogrn-input]');
    await input.type('370581502199855');
    const submit = await form.$('[data-id=innogrn-submit]');
    submit.click();
    await page.waitForSelector('img.icon.active');
  });
  test('should add .valid class for valid dinner', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=innogrn-form-widget]');
    const input = await form.$('[data-id=innogrn-input]');
    await input.type('36144214906145');
    const submit = await form.$('[data-id=innogrn-submit]');
    submit.click();
    await page.waitForSelector('img.icon.active');
  });
  test('should add .valid class for valid JCB', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=innogrn-form-widget]');
    const input = await form.$('[data-id=innogrn-input]');
    await input.type('3024007171909962');
    const submit = await form.$('[data-id=innogrn-submit]');
    submit.click();
    await page.waitForSelector('img.icon.active');
  });
  test('should add .valid class for valid discover', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=innogrn-form-widget]');
    const input = await form.$('[data-id=innogrn-input]');
    await input.type('3024007171909962');
    const submit = await form.$('[data-id=innogrn-submit]');
    submit.click();
    await page.waitForSelector('img.icon.active');
  });
  test('should add .valid class for valid mastercard', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=innogrn-form-widget]');
    const input = await form.$('[data-id=innogrn-input]');
    await input.type('5024007171909962');
    const submit = await form.$('[data-id=innogrn-submit]');
    submit.click();
    await page.waitForSelector('img.icon.active');
  });
});
