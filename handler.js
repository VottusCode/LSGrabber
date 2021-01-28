(() => {
  const $proxy = document.getElementById("__lsgrabber__");

  const evt = document.createEvent("Event");
  evt.initEvent("lsFetchEvent", true, true);

  const sendMessage = (content) => {
    $proxy.innerText = JSON.stringify(content);
    $proxy.dispatchEvent(evt);
  };

  sendMessage(localStorage);
})();
