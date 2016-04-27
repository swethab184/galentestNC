this.browsers = {
  firefox: {
    browserName: "xfirefox"
  },
  chrome: {
    browserName: "chrome"
  }
};

this.devices = {
  mobile: {
    deviceName: "mobile",
    size: "400x700"
  },
  tablet: {
    deviceName: "tablet",
    size: "600x800"
  },
  desktop: {
    deviceName: "desktop",
    size: "1024x768"
  }
};

forAll(devices, function () {
  	forAll(browsers, function () {
	    test("Test on ", function (device, browser) {
		
	      	var driver = createDriver("http://newsclick.in/india/double-standards-arrest-owaisi-impunity-ramdev", device.size, browser.browserName);
			  checkLayout(driver, "home-page.gspec");
			  driver.quit();
	    });
	  });
});

  
