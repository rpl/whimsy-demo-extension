console.log("whimsicalify - content script loaded");

const img_url = chrome.runtime.getURL("whimsy.svg");
const img = document.createElement("img");
img.setAttribute("src", img_url);
img.style.zIndex = "5000";
document.body.append(img);
img.setAttribute("class", "whimsy-move");
shadow({el: img, zIndex: "4900", opacity: "0.6", delay: 100});
shadow({el: img, zIndex: "4800", opacity: "0.4", delay: 190});
shadow({el: img, zIndex: "4700", opacity: "0.2", delay: 240});

function shadow({el, zIndex, opacity, delay}) {
  setTimeout(() => {
    const el2 = el.cloneNode();
    el2.style.zIndex = zIndex;
    el2.style.opacity = opacity;
    document.body.append(el2);
  }, delay);
}

