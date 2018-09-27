var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
 'browserName' : 'iPhone',
 'device' : 'iPhone 7',
 'realMobile' : 'true',
 'os_version' : '10.3',
 'browserstack.user' : 'abhishekmordani2',
 'browserstack.key' : 'yNdm9XxyX7esbsk4Uqg6'
}

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com').then(function(){
  driver.findElement(webdriver.By.name('qq')).sendKeys('BrowserStack\n').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title);
      driver.quit();
    });
  });
});