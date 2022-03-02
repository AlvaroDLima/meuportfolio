let iframeOverlap = document.querySelectorAll('.iframe-sobreposicao')

function removeOverlap (index) {
   iframeOverlap[index].style.display = 'none'
}

iframeOverlap.forEach((iframe, index) => {
    "click touchstart".split(" ").forEach(event => {
        iframe.addEventListener(event, () => {
            removeOverlap(index)
        });
    });
})

