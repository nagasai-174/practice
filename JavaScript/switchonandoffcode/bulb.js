function switchOff() {
    document.getElementById("bulbImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("catImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switchStatus").textContent="Switch Off"
}

function switchOn() {
    document.getElementById('bulbImg').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("catImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("switchStatus").textContent="Switch On"
}