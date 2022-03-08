let imgOverlap = document.querySelectorAll('.img-sobreposicao')

function removeOverlap (index) {
   imgOverlap[index].style.display = 'none'
}

imgOverlap.forEach((img, index) => {
    "click touchstart".split(" ").forEach(event => {
        img.addEventListener(event, () => {
            removeOverlap(index)
        });
    });
})

