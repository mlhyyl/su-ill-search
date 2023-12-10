chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.urls) {
      for (let url of request.urls) {
          chrome.tabs.create({url: url});
      }
  }
});