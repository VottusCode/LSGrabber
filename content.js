chrome.runtime.onMessage.addListener((_, __, response) => {
  response(JSON.parse(document.getElementById("__lsgrabber__").innerHTML));
});

const $proxy = document.createElement("div");
$proxy.id = "__lsgrabber__";
$proxy.style.display = "none";
document.body.appendChild($proxy);

const $handlerScript = window.document.createElement("script");
$handlerScript.src = chrome.extension.getURL("handler.js");
$handlerScript.id = "__lsgrabberscript__";

$proxy.addEventListener("lsFetchEvent", function () {
  var eventData = $proxy.innerText;
  chrome.runtime.sendMessage(eventData);
});

document.body.appendChild($handlerScript);
