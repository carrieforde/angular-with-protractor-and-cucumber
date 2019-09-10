import { browser, element, by } from 'protractor';

describe('Protractor demo app', () => {
  const firstNumber = element(by.model('first'));
  const secondNumber = element(by.model('second'));
  const goButton = element(by.id('gobutton'));
  const latestResult = element(by.binding('latest'));

  beforeEach(() => {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', () => {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', () => {
    firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);

    goButton.click();

    expect(latestResult.getText()).toEqual('10');
  });

  it('should read the value from an input', () => {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  });
});
