if ($('#home').length > 0){ 
  var controller = new ScrollMagic.Controller();
  // build scenes

  new ScrollMagic.Scene({triggerElement: "#one", duration: "100%"})
    .triggerHook(0)
    .setPin("#one", {pushFollowers: false})
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#p-one", duration: "100%"})
    .setClassToggle("#p-one", "active") // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#p-two", duration: "100%"})
    .setClassToggle("#p-two", "active") // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#p-three", duration: "100%"})
    .setClassToggle("#p-three", "active") // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#p-one", duration: "200%"})
    .setClassToggle("#cloud", "back") // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#three-fade", duration: "200%"})
    .triggerHook(0)
    .setPin("#three-fade",{pushFollowers: false})
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#three", duration: "100%"})
    .triggerHook(0)
    .setClassToggle("#three-fade", "on") // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#four", duration: "120%"})
    .triggerHook(1)
    .setClassToggle(".arrow-container", "gone") // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#two", duration: "400%"})
    .triggerHook(0)
    .setClassToggle(".dir", "gone") // add class toggle
    .addTo(controller);
  $('#go').click(function() {
    $('.end').addClass('gone');
    $('.end2').addClass('show');
  });
  $('#stay').click(function() {
    $('#four').addClass('stay');
     $('.end').addClass('gone');
    $('.end2').addClass('show');
     $('.end3').addClass('show');
  });
    $('#reloader').click(function() {
      location.reload();
  });
}

if ($('.panel').length > 0){ 
  var controller = new ScrollMagic.Controller();
  
  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .triggerHook(0)
      .setPin(slides[i])
      .setClassToggle(slides[i], "active") // add class toggle
      .addTo(controller);
    }
    if ($('.last-slide').length > 0){ 
      new ScrollMagic.Scene({triggerElement: ".last-slide", duration: "100%"})
        .triggerHook(0)
        .setClassToggle(".arrow-container", "gone") // add class toggle
        .addTo(controller);
      }
}

       