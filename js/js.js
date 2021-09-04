rr = 30
lr = 10
t = '10s'
color = '#aaaaf1'

function draw() {
    var x = document.body.offsetWidth / 2
    var y = document.body.offsetHeight / 2

    R = Math.sqrt(x * x + y * y)

    svg_text = '<defs id="defs1299">\
    <linearGradient inkscape:collect="always" id="linearGradient2120">\
    <stop style="stop-color:' + color + ';stop-opacity:0.2;" offset="0"/>\
    <stop style="stop-color:' + color + ';stop-opacity:0.2;" offset="0"><animate attributeName="offset" from="-0.4" to="1" begin="0s" dur="' + t + '" repeatCount="indefinite" /></stop>\
    <stop style="stop-color:' + color + ';stop-opacity:1;" offset="0.5"><animate attributeName="offset" from="-0.2" to="1.2" begin="0s" dur="' + t + '" repeatCount="indefinite" /></stop>\
    <stop style="stop-color:' + color + ';stop-opacity:0.2;" offset="0"><animate attributeName="offset" from="0" to="1.4" begin="0s" dur="' + t + '" repeatCount="indefinite" /></stop>\
    <stop style="stop-color:' + color + ';stop-opacity:0.2;" offset="1"/>\
    </linearGradient>\
    <radialGradient inkscape:collect="always" xlink:href="#linearGradient2120" id="radialGradient2122" cx="0" cy="0" fx="0" fy="0" r="' + R + '" gradientUnits="userSpaceOnUse" />\
    </defs>\
    <g id="g" transform="translate(500 500)">'
    // 圈
    rr_list = []
    for (i = rr; i < R; i = i + rr) {
        rr_list[rr_list.length] = i
    }
    for (i in rr_list) {
        svg_text += '<circle cx=0 cy=0 r=' + rr_list[i] + ' stroke="" stroke-width="1" fill="" />'
    }
    // 射线
    lr_list = []
    for (i = 0; i < 360; i = i + lr) {
        lr_list[lr_list.length] = i
    }
    for (i in lr_list) {
        svg_text += '<line x1="0" y1="0" x2="' + R + '" y2="0" stroke="" stroke-width="1" transform="rotate(' + lr_list[i] + ')"/>'
    }
    // 斜线
    for (i in lr_list) {
        for (j in rr_list) {
            svg_text += '<line x1="' + xyrl(i, j)[0] + '" y1="' + xyrl(i, j)[1] + '" x2="' + xyrl(Number(i) + 1, Number(j) + 1)[0] + '" y2="' + xyrl(Number(i) + 1, Number(j) + 1)[1] + '" />'
        }
    }
    svg_text += '</g>'
    document.getElementById('svg').innerHTML = svg_text

    function xyrl(a, b) { //a:第几根,b:第几圈
        var x = b * rr * Math.cos((a * lr) * Math.PI / 180)
        var y = b * rr * Math.sin((a * lr) * Math.PI / 180)
        return [x, y]
    }
    document.getElementById('g').setAttribute('transform', 'translate(' + x + ' ' + y + ')')
}
window.addEventListener('resize', draw)
draw()