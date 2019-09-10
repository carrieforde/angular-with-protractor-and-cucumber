import { browser } from 'protractor';
import { CalculatorPage } from './app.po';

const calc = new CalculatorPage();

describe('Protractor demo app', () => {

  beforeEach(async () => {
    await calc.navigateTo();
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', async () => {
    await calc.setValues(1, 2);
    calc.goButton.click();

    expect(calc.latestResult.getText()).toEqual('3');
  });

  it('should add four and six', async () => {
    await calc.setValues(4, 6);
    calc.goButton.click();

    expect(calc.latestResult.getText()).toEqual('10');
  });

  it('should read the value from an input', () => {
    calc.firstNumber.sendKeys(1);
    expect(calc.firstNumber.getAttribute('value')).toEqual('1');
  });
});
