var strTicketToUnlock = ''; //Se usa para saber que boleto desbloquearemos

var swiper = new Swiper(".swiperCard-1", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  navigation: {
    nextEl: ".nav-next-swiperCard-1",
    prevEl: ".nav-prev-swiperCard-1",
  },
  pagination: {
    el: ".swiper-pagination-swiperCard-1",
    clickable: true,
  },
  // speed: 1200,
  // zoom: true,
  // preloadImages: true,
  // roundLengths: true,
  // lazy: true,
});


var swiper2 = new Swiper(".swiperCard-2", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  navigation: {
    nextEl: ".nav-next-swiperCard-2",
    prevEl: ".nav-prev-swiperCard-2",
  },
  pagination: {
    el: ".swiper-pagination-swiperCard-2",
    clickable: true,
  },
  // speed: 1200,
  // zoom: true,
  // preloadImages: true,
  // roundLengths: true,
  // lazy: true,
});


jQuery( document ).ready(function() {
  jQuery(".ctaShowModalMensaje").click(function(){
	strTicketToUnlock = this.id;
    jQuery("body").addClass("modalActive");
    jQuery("#modalValidacion").addClass("modalActive");
    jQuery(".mask-modal").addClass("modalActive");
  });

  jQuery(".cerrarModal").click(function(){
    jQuery("body").removeClass("modalActive");
    jQuery("#modalValidacion").removeClass("modalActive");
    jQuery(".mask-modal").removeClass("modalActive");
  });



});
