var md = new MobileDetect(window.navigator.userAgent);

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

function initCSS() {
  TweenLite.set($(".nemo-left-eye"), {autoAlpha:0})
  TweenLite.set($(".nemo-right-eye"), {autoAlpha:0})
  TweenLite.set($(".marlin-left-eye"), {autoAlpha:0})
  TweenLite.set($(".marlin-right-eye"), {autoAlpha:0})
  TweenLite.set($(".dory-left-eye"), {autoAlpha:0})
  TweenLite.set($(".dory-right-eye"), {autoAlpha:0})
  TweenLite.set($(".hank-left-eye"), {autoAlpha:0})
  TweenLite.set($(".hank-right-eye"), {autoAlpha:0})
  TweenLite.set($(".dugong-eye-lid"), {autoAlpha:0})
  TweenLite.set($(".ws-left-eye"), {autoAlpha:0})
  TweenLite.set($(".ws-right-eye"), {autoAlpha:0})
  TweenLite.set($(".dory"), {scale:.8})
  TweenLite.set($(".dugong"), {transformOrigin:"50% 50%", rotation:13})

  TweenLite.set($(".arrow-img-02"), {yPercent:-180})

  TweenLite.set($(".nemo-body"), {alpha:0})
  TweenLite.set($(".nemo-04-container"), {x:170, scale:.8})
  TweenLite.set($(".whale-shark-container"), {rotationY:-180, scale:.8})


  hankBlinkLoop()
  arrowAnimation()
  // whaleSharkAnimation()
  // dugongAnimation()


  hankAnimation()
  // clownFishAnimation()
  // waveFins()
  if (md.phone() || md.tablet()) {
      $(".dory").show()
      doryAnimation()
      doryFins()
      TweenLite.set($(".fish"), {"z-index":5})

  } else {
    $(".dory-container").hide()
  }
}

initCSS()

function arrowAnimation() {
  var tl = new TimelineMax({repeat:-1}),
      arrowImg01 = $(".arrow-img-01"),
      arrowImg02 = $(".arrow-img-02");
  tl.to(arrowImg01, 1, {yPercent:180, force3D:false, ease:Sine.easeOut}, "1")
  tl.to(arrowImg02, 1, {yPercent:0, force3D:false, ease:Sine.easeOut}, "1")
}


function clownFishAnimation() {
  var tl = new TimelineMax({repeat:-1}),
      nemo01 = $(".nemo-body-01"),
      nemo02 = $(".nemo-body-02"),
      nemo03 = $(".nemo-body-03"),
      nemo04 = $(".nemo-body-04"),
      nemo05 = $(".nemo-body-05"),
      nemoContainer = $(".nemo-04-container"),
      marlinContainer = $(".marlin-container"),
      marlinRightFin = $(".marlin-right-fin");

  // Nemo In
  tl.add(hankBlink, "2")
  tl.to(nemoContainer, 2, {x:0, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, "1")
  .to(nemoContainer, 2, {bezier: [
    {x:112, y:20},
    {x:56,y:40},
    {x:0, y:20},
  ], ease: Sine.easeInOut}, "1")
  .to(nemoContainer, 2, {y:10, x:2, ease:Sine.easeOut}, "3")
  .to(nemoContainer, 2, {y:20, x:0, ease:Sine.easeOut}, "5")
  .to(nemoContainer, 1, {rotation:-10, ease:Sine.easeOut}, "1")
  .to(nemoContainer, 1, {rotation:0, ease:Back.easeOut}, "2")

  .add(nemoBlink, "4")
  .add(nemoBlink, "6")

  // Nemo Out
  .to(nemoContainer, 1, {x:220, y:120, ease:Sine.easeIn}, "8.2")

  // Nemo In
  .to(nemoContainer, 0, {y:270, x:-890, rotationY:-180, scale:.8}, "9.6")
  .to(nemoContainer, 2, {x:-700, scale:1, ease:Sine.easeOut}, "10.2")
  .to(nemoContainer, 2, {bezier: [
    {x:-844, y:290},
    {x:-798,y:310},
    {x:-700, y:290},
  ], ease: Sine.easeInOut}, "10.2")

  .to(nemoContainer, 2, {y:280, x:-698, ease:Sine.easeOut}, "12.2")
  .to(nemoContainer, 2, {y:290, x:-700, ease:Sine.easeOut}, "14.2")
  .to(nemoContainer, 1, {rotation:10, ease:Sine.easeOut}, "10.2")
  .to(nemoContainer, 1, {rotation:0, ease:Back.easeOut}, "11.2")
  .add(nemoBlink, "12")
  .add(nemoBlink, "14")

  //Nemo Out
  .to(nemoContainer, 1, {x:-940, y:200, rotation:10, ease:Sine.easeIn}, "16.3")


  //Marlin In
  tl.add(marlinBlink, "2")
  tl.add(marlinBlink, "5")
  tl.from(marlinContainer, 1, {x:-120, ease:Sine.easeOut}, "1")
  .to(marlinContainer, 2, {bezier: [
    {x:-80, y:0},
    {x:-40,y:20},
    {x:20, y:0},
  ], ease: Sine.easeInOut}, "1")

  .to(marlinContainer, 1, {rotation:10, ease:Sine.easeOut}, "1")
  .to(marlinContainer, 1, {rotation:0, ease:Sine.easeOut}, "2.5")

  .to(marlinContainer, 2, {y:10, ease:Sine.easeOut}, "2")
  .to(marlinContainer, 2, {y:20, ease:Sine.easeOut}, "4")
  .to(marlinContainer, 2, {y:10, ease:Sine.easeOut}, "6")

  //Marlin Out
  .to(marlinContainer, 1, {x:-140, ease:Sine.easeIn}, "8")

  //Marlin In
  .to(marlinContainer, 0, {x:1260, rotationY:-180}, "10")
  .to(marlinRightFin, 0, {alpha:0},"10")
  .to(marlinContainer, 1, {x:1100, ease:Sine.easeOut}, "11")

  .add(marlinBlink, "12")
  .add(marlinBlink, "14")


  .to(marlinContainer, 2, {bezier: [
    {x:1220, y:0},
    {x:1180,y:20},
    {x:1100, y:0},
  ], ease: Sine.easeInOut}, "11")
  .to(marlinContainer, 1, {rotation:-10, ease:Sine.easeOut}, "11")
  .to(marlinContainer, 1, {rotation:0, ease:Back.easeOut}, "12")

  .to(marlinContainer, 2, {y:35, ease:Sine.easeOut}, "12")
  .to(marlinContainer, 2, {y:30, ease:Sine.easeOut}, "14")
  .to(marlinContainer, 2, {y:35, ease:Sine.easeOut}, "16")
  .to(marlinContainer, 2, {y:30, ease:Sine.easeOut}, "18")
  .to(marlinContainer, 2, {y:35, ease:Sine.easeOut}, "20")
  .to(marlinContainer, 2, {y:30, ease:Sine.easeOut}, "22")

  .to(marlinContainer, 2, {x:1260, rotation:-10, ease:Sine.easeOut}, "16.3")
}

function doryAnimation() {
  console.log("Start dory mobile animation")
  var tl = new TimelineMax({repeat:-1});
  var doryContainer = $(".dory-container");

  tl.from(doryContainer, 2, {x:-280, scale:.8, ease:Sine.easeOut}, "1")
  tl.add(doryBlink, "2")
  tl.add(doryBlink, "4")
  tl.add(doryBlink, "8")
  tl.to(doryContainer, 2, {bezier: [
    {x:-80, y:20},
    {x:-40,y:40},
    {x:20, y:20},
  ], ease: Sine.easeInOut}, "1")

  tl.to(doryContainer, 1, {rotation:10, transformOrigin:"50% 50%", ease:Sine.easeOut}, "0")
  tl.to(doryContainer, 1, {rotation:0, transformOrigin:"50% 50%", ease:Sine.easeOut}, "2")

  tl.to(doryContainer, 2, {y:10, ease:Sine.easeOut}, "3")
  tl.to(doryContainer, 2, {y:30, ease:Sine.easeOut}, "5")
  tl.to(doryContainer, 2, {y:10, ease:Sine.easeOut}, "7")
  tl.to(doryContainer, 2, {y:30, ease:Sine.easeOut}, "9")

  //Dory Out
  tl.to(doryContainer, 2, {bezier: [
    {x:-40, y:20},
    {x:-140, y:60},
    {x:-320, y:20}
  ], ease:Sine.easeOut}, "10")
  tl.to(doryContainer, 1, {rotation:10, transformOrigin:"50% 50%", ease:Sine.easeOut}, "10")
  tl.to(doryContainer, 1, {rotation:0, transformOrigin:"50% 50%", ease:Sine.easeOut}, "11")
  tl.to(doryContainer, 0, {delay:5}, "14")
}

function hankBlinkLoop() {
  var tl = new TimelineMax({repeat:-1})
  tl.add(hankBlink, "12")
  tl.add(hankBlink, "21")
}

/*function dugongBlink() {
  var tl = new TimelineMax(),
      dugongEyeLid = $(".dugong-eye-lid");
  tl.to(dugongEyeLid, 0, {autoAlpha:1}, "0")
  tl.to(dugongEyeLid, 0, {autoAlpha:0}, "0.15")
  tl.to(dugongEyeLid, 0, {autoAlpha:1}, "0.3")
  tl.to(dugongEyeLid, 0, {autoAlpha:0}, "0.45")
  tl.to(dugongEyeLid, 0, {x:0, delay: 3},"1")
}

function dugongFin() {
  var tl = new TimelineMax({repeat:-1}),
      dugongLeftFin = $(".dugong-left-fin"),
      dugongRightFin = $(".dugong-right-fin");
  tl.to(dugongLeftFin, 1, {rotationX:20, transformOrigin:"50% 0%", ease:Sine.easeOut}, "0")
  tl.to(dugongLeftFin, 1, {rotationX:0, transformOrigin:"50% 0%", ease:Sine.easeOut}, "1")
  tl.to(dugongRightFin, 1, {rotation:-5, transformOrigin:"10% 10%", ease:Sine.easeOut}, "0")
  tl.to(dugongRightFin, 1, {rotation:0, transformOrigin:"10% 10%", ease:Sine.easeOut}, "1")
}

function whaleSharkFin() {
  var tl = new TimelineMax({repeat:-1}),
      wsLeftFin = $(".ws-left-fin"),
      wsRightFin = $(".ws-right-fin");
  tl.to(wsLeftFin, 1, {rotationX:20, transformOrigin:"50% 0%", ease:Sine.easeOut}, "0")
  tl.to(wsLeftFin, 1, {rotationX:0, transformOrigin:"50% 0%", ease:Sine.easeOut}, "1")
  tl.to(wsRightFin, 1, {rotation:-5, transformOrigin:"10% 10%", ease:Sine.easeOut}, "0")
  tl.to(wsRightFin, 1, {rotation:0, transformOrigin:"10% 10%", ease:Sine.easeOut}, "1")
}

function dugongAnimation() {
  var tl = new TimelineMax({repeat:-1}),
      dugong = $(".dugong"),
      wsSharkContainer = $(".whale-shark"),
      wsBody = $(".ws-body");

  tl.from(dugong, 1, {x:-170, ease:Sine.easeOut}, "2")
  .to(dugong, 2, {bezier: [
    {x:-112, y:20},
    {x:-56,y:40},
    {x:-0, y:20},
  ], ease: Sine.easeInOut}, "2")
  .to(dugong, 2, {y:40, ease:Sine.easeInOut}, "2")
  .to(dugong, 2, {y:20, ease:Sine.easeInOut}, "4")
  .to(dugong, 2, {y:40, ease:Sine.easeInOut}, "6")
  .to(dugong, 2, {y:20, ease:Sine.easeInOut}, "8")
  .to(dugong, 2, {y:40, ease:Sine.easeInOut}, "10")
  .to(dugong, 2, {y:20, ease:Sine.easeInOut}, "12")
  .add(dugongBlink, "4")
  .add(dugongBlink, "8")

  .to(dugong, 4, {x:-170, y:40, ease:Sine.easeIn}, "14")
  .to(dugong, 0, {delay:10},"14")

  tl.from(wsSharkContainer, 1, {x:250, ease:Sine.easeInOut}, "2")
  .to(wsSharkContainer, 2, {bezier: [
    {x:167, y:0},
    {x:82,y:20},
    {x:0, y:0},
  ], ease: Sine.easeInOut}, "2")

  .to(wsSharkContainer, 1, {rotation:-10, ease:Sine.easeOut}, "1")
  .to(wsSharkContainer, 1, {rotation:0, ease:Sine.easeOut}, "2.5")

    tl.to(wsSharkContainer, 2, {y:10, ease:Sine.easeOut}, "2")
    tl.to(wsSharkContainer, 2, {y:20, ease:Sine.easeOut}, "4")
    tl.to(wsSharkContainer, 2, {y:10, ease:Sine.easeOut}, "6")
    tl.to(wsSharkContainer, 2, {y:20, ease:Sine.easeOut}, "8")
    tl.to(wsSharkContainer, 2, {y:10, ease:Sine.easeOut}, "10")
    tl.to(wsSharkContainer, 2, {y:20, ease:Sine.easeOut}, "12")




  .add(whaleSharkBlink, "5")
  .add(whaleSharkBlink, "9")

  //ws out
  .to(wsSharkContainer, 4, {x:250, y:10, ease:Sine.easeIn}, "14")

}



dugongFin()
// dugongBlink()
// whaleSharkBlink()
whaleSharkFin()

function whaleSharkBlink() {
  var tl = new TimelineMax({repeat:-1}),
      wsLeftEye = $(".ws-left-eye"),
      wsRightEye = $(".ws-right-eye");
  tl.to([wsLeftEye, wsRightEye], 0, {autoAlpha:1}, "0")
  .to([wsLeftEye, wsRightEye], 0, {autoAlpha:0}, "0.15")
  .to([wsLeftEye, wsRightEye], 0, {autoAlpha:1}, "0.3")
  .to([wsLeftEye, wsRightEye], 0, {autoAlpha:0}, "0.45")
  .to(wsLeftEye, 0, {delay:5},"2")
}

function whaleSharkAnimation() {
  // var tl = new TimelineMax({repeat:-1}),
  //     wsSharkContainer = $(".whale-shark"),
  //     wsBody = $(".ws-body");
  //   tl.from(wsSharkContainer, 1, {x:250, ease:Sine.easeOut}, "1")
  //   .to(wsSharkContainer, 2, {bezier: [
  //     {x:167, y:0},
  //     {x:82,y:20},
  //     {x:0, y:0},
  //   ], ease: Sine.easeInOut}, "1")
  //
  //   .to(wsSharkContainer, 1, {rotation:-10, ease:Sine.easeOut}, "1")
  //   .to(wsSharkContainer, 1, {rotation:0, ease:Sine.easeOut}, "2.5")
  //
  //   .to(wsSharkContainer, 2, {y:10, ease:Sine.easeOut}, "2")
  //   .to(wsSharkContainer, 2, {y:20, ease:Sine.easeOut}, "4")
  //   .to(wsSharkContainer, 2, {y:10, ease:Sine.easeOut}, "6")
  //
  //   //ws out
  //   .to(wsSharkContainer, 1, {x:250, ease:Sine.easeIn}, "8")
}

/*
function nemoBlink() {
  var nb = new TimelineMax();
  var nemoLeftEye = $(".nemo-left-eye"),
  nemoRightEye = $(".nemo-right-eye");
  nb.to([nemoLeftEye, nemoRightEye], 0, {autoAlpha:1}, "0")
  .to([nemoLeftEye, nemoRightEye], 0, {autoAlpha:0}, "0.15")
  .to([nemoLeftEye, nemoRightEye], 0, {autoAlpha:1}, "0.3")
  .to([nemoLeftEye, nemoRightEye], 0, {autoAlpha:0}, "0.45")
}

function marlinBlink() {
  var mb = new TimelineMax()
  var marlinLeftEye = $(".marlin-left-eye"),
  marlinRightEye = $(".marlin-right-eye");
  mb.to([marlinLeftEye, marlinRightEye], 0, {autoAlpha:1}, "0")
  .to([marlinLeftEye, marlinRightEye], 0, {autoAlpha:0}, "0.15")
  .to([marlinLeftEye, marlinRightEye], 0, {autoAlpha:1}, "0.3")
  .to([marlinLeftEye, marlinRightEye], 0, {autoAlpha:0}, "0.45")
} */

function doryBlink() {
  var mb = new TimelineMax()
  var doryLeftEye = $(".dory-left-eye"),
  doryRightEye = $(".dory-right-eye");
  mb.to([doryLeftEye, doryRightEye], 0, {autoAlpha:1}, "0")
  .to([doryLeftEye, doryRightEye], 0, {autoAlpha:0}, "0.15")
  .to([doryLeftEye, doryRightEye], 0, {autoAlpha:1}, "0.3")
  .to([doryLeftEye, doryRightEye], 0, {autoAlpha:0}, "0.45")
}

function hankBlink() {
  var hb = new TimelineMax(),
      hankLeftEye = $(".hank-left-eye"),
      hankRightEye = $(".hank-right-eye");
  hb.to([hankLeftEye, hankRightEye], 0, {autoAlpha:1}, "0")
  .to([hankLeftEye, hankRightEye], 0, {autoAlpha:0}, ".2")
}

function hankAnimation() {
  var tl = new TimelineMax({repeat:-1})
  var hankArm = $(".hank-arm"),
      hankBody = $(".hank-body"),
      hankLeftEye = $(".hank-left-eye"),
      hankRightEye = $(".hank-right-eye")
  ;
  tl.to(hankArm, 2, {rotation:10, transformOrigin:"50% 100%", ease:Sine.easeInOut}, "0")
  .to(hankArm, 2, {rotation:0, transformOrigin:"50% 100%", ease:Sine.easeInOut}, "2")
  .to([hankBody, hankLeftEye, hankRightEye], 2, {y:10, ease:Sine.easeInOut}, "0")
  .to([hankBody, hankLeftEye, hankRightEye], 2, {y:00, ease:Sine.easeInOut}, "2")
}
/*
function waveFins() {
  var tl = new TimelineMax({repeat:-1})
  var nemoLeftFin = $(".nemo-left-fin-04"),
      nemoRightFin = $(".nemo-right-fin-04"),
      nemoTopFin = $(".nemo-top-fin-04"),
      marlinLeftFin = $(".marlin-left-fin"),
      marlinRightFin = $(".marlin-right-fin"),
      marlinBottomLeftFin = $(".marlin-bottom-left-fin"),
      marlinBottomRightFin = $(".marlin-bottom-right-fin");

  //Nemo Fins
  tl.to(nemoLeftFin, .3, {rotationY:-50, transformOrigin:"100% 50%", ease:Sine.easeOut}, "0")
  tl.to(nemoLeftFin, .3, {rotationY:0, ease:Sine.easeOut}, ".3")
  tl.to(nemoLeftFin, .3, {rotationY:-50, ease:Sine.easeOut}, ".6")
  tl.to(nemoLeftFin, .3, {rotationY:0, ease:Sine.easeOut}, ".9")
  tl.to(nemoLeftFin, .3, {rotationY:-50, ease:Sine.easeOut}, "1.2")
  tl.to(nemoLeftFin, .3, {rotationY:0, ease:Sine.easeOut}, "1.5")

  tl.to(nemoRightFin, .3, {rotationY:40, transformOrigin:"0% 50%", ease:Sine.easeInOut}, "0")
  tl.to(nemoRightFin, .3, {rotationY:0, ease:Sine.easeInOut}, ".3")
  tl.to(nemoRightFin, .3, {rotationY:40, transformOrigin:"0% 50%", ease:Sine.easeInOut}, ".6")
  tl.to(nemoRightFin, .3, {rotationY:0, ease:Sine.easeInOut}, ".9")
  tl.to(nemoRightFin, .3, {rotationY:40, transformOrigin:"0% 50%", ease:Sine.easeInOut}, "1.2")
  tl.to(nemoRightFin, .3, {rotationY:0, ease:Sine.easeInOut}, "1.5")

  tl.to(nemoTopFin, .7, {rotationX:-30, trasformOrigin:"50% 100", ease:Sine.easeInOut}, "0")
  tl.to(nemoTopFin, .7, {rotationX:0, ease:Sine.easeInOut}, ".7")

  //Marlin Fins
  tl.to(marlinRightFin, .3, {rotationY:-30, transformOrigin:"0% 50%"}, "0")
  tl.to(marlinRightFin, .3, {rotationY:0, ease:Sine.easeOut}, ".3")
  tl.to(marlinRightFin, .3, {rotationY:-30, ease:Sine.easeOut}, ".6")
  tl.to(marlinRightFin, .3, {rotationY:0, ease:Sine.easeOut}, ".9")
  tl.to(marlinRightFin, .3, {rotationY:-30, ease:Sine.easeOut}, "1.2")
  tl.to(marlinRightFin, .3, {rotationY:0, ease:Sine.easeOut}, "1.5")

  tl.to(marlinLeftFin, .3, {rotationY:30, transformOrigin:"100% 100%"}, "0")
  tl.to(marlinLeftFin, .3, {rotationY:0, ease:Sine.easeIn}, ".3")
  tl.to(marlinLeftFin, .3, {rotationY:-30, ease:Sine.easeIn}, ".6")
  tl.to(marlinLeftFin, .3, {rotationY:0, ease:Sine.easeIn}, ".9")
  tl.to(marlinLeftFin, .3, {rotationY:-30, ease:Sine.easeIn}, "1.2")
  tl.to(marlinLeftFin, .3, {rotationY:0, ease:Sine.easeIn}, "1.5")

  tl.to(marlinBottomLeftFin, .7, {rotationX:40, transformOrigin:"50% 0%"}, ".2")
  tl.to(marlinBottomLeftFin, .7, {rotationX:0, transformOrigin:"50% 0%"}, ".9")

  tl.to(marlinBottomRightFin, .7, {rotationX:40, transformOrigin:"50% 0%"}, "0")
  tl.to(marlinBottomRightFin, .7, {rotationX:0, transformOrigin:"50% 0%"}, ".7")

} */

function doryFins() {
  var tl = new TimelineMax({repeat:-1}),
      doryLeftFin = $(".dory-left-fin"),
      doryRightFin = $(".dory-right-fin");
  //Dory Fins
  tl.to(doryLeftFin, .3, {rotationY:30, transformOrigin:"100% 100%", ease:Sine.easeOut}, "0")
  tl.to(doryLeftFin, .3, {rotationY:0, ease:Sine.easeOut}, ".3")
  tl.to(doryLeftFin, .3, {rotationY:30, ease:Sine.easeOut}, ".6")
  tl.to(doryLeftFin, .3, {rotationY:0, ease:Sine.easeOut}, ".9")
  tl.to(doryLeftFin, .3, {rotationY:30, ease:Sine.easeOut}, "1.2")
  tl.to(doryLeftFin, .3, {rotationY:0, ease:Sine.easeOut}, "1.5")

  tl.to(doryRightFin, .3, {rotationY:30, transformOrigin:"0% 0%", ease:Sine.easeOut}, "0")
  tl.to(doryRightFin, .3, {rotationY:0, ease:Sine.easeOut}, ".3")
  tl.to(doryRightFin, .3, {rotationY:30, ease:Sine.easeOut}, ".6")
  tl.to(doryRightFin, .3, {rotationY:0, ease:Sine.easeOut}, ".9")
  tl.to(doryRightFin, .3, {rotationY:30, ease:Sine.easeOut}, "1.2")
  tl.to(doryRightFin, .3, {rotationY:0, ease:Sine.easeOut}, "1.5")
}
