import { ElementFinder, element, by, browser } from 'protractor';

export class CalculatorPage {
  firstNumber: ElementFinder;
  secondNumber: ElementFinder;
  goButton: ElementFinder;
  latestResult: ElementFinder;

  constructor() {
    this.firstNumber = element(by.model('first'));
    this.secondNumber = element(by.model('second'));
    this.goButton = element(by.id('gobutton'));
    this.latestResult = element(by.binding('latest'));
  }

  async navigateTo() {
    await browser.get('http://juliemr.github.io/protractor-demo/');
  }

  async setValues(first: number, second: number) {
    await this.firstNumber.sendKeys(first);
    await this.secondNumber.sendKeys(second);
  }
}
