chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, {}, (response) => {
    if (response)
      document.getElementById("code").innerHTML = JSON.stringify(
        response,
        null,
        2
      );
  });
});
