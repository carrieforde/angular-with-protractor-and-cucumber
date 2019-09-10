import { Given, When, Then } from 'cucumber';
import { CalculatorPage } from '../src/app.po';

const calc = new CalculatorPage();

Given('I have navigated to the calculator', async () => {
  await calc.navigateTo();
});

When('I add two numbers {string} and {string}', async (string, string2) => {
  await calc.setValues(string, string2);
  await calc.goButton.click();
});

Then('the displayed output should be {string}', (string) => {
  calc.latestResult.getText().then(text => console.log(text));
  console.log(string);
});
