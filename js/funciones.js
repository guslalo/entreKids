$(window).load(function(){
	//owlCarousel//
	$('.owl-carousel.slideprincipal').owlCarousel({
		themeClass: 'owl-fullscreen owl-nonav white owl-loaded',
		margin:0,
		autoplay:true,
		loop:true,
		autoplayTimeout:4000,
		items:1, // items to display in slider
		navRewind:true, // Go to first/last.
		navText:true, // left and right arrows
		autoHeight: true,
		navContainerClass: 'owl-buttons',
		dotsClass: 'owl-pagination',
		dotClass: 'owl-page',
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplayHoverPause:false, //false
		lazyLoad: false, // IMG need special markup class="lazyOwl" and data-src="url_to_img" or/and data-src-retina="url_to_highres_img"
		dots:false, // true
		responsiveClass:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1,
				navText:false,
				mouseDrag: true
			},
			720:{
				items:1,
				nav:true
			},
			960:{
				items:1,
				nav:true,			
		         mouseDrag: false,
				loop:true
			}
		}
    });

     $('.owl-carousel.gnoticias').owlCarousel({
		themeClass: 'owl-fullscreen owl-nonav white owl-loaded',
		margin:20,
		autoplay:true,
		loop:false,
		autoplayTimeout:4000,
		items:4, 
		navRewind:true, // Go to first/last.
		navText:true, // left and right arrows
		autoHeight: true,
		navContainerClass: 'owl-buttons',
		dotsClass: 'owl-pagination',
		dotClass: 'owl-page',
		/*animateOut: 'fadeOut',
		animateIn: 'fadeIn',*/
		autoplayHoverPause:true, //false
		lazyLoad: false, // IMG need special markup class="lazyOwl" and data-src="url_to_img" or/and data-src-retina="url_to_highres_img"
		pagination:false,
		responsiveClass:false,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1,
				navText:false,
				mouseDrag: true,
				
				dots:true
			},
			720:{
				items:2,
				mouseDrag: true,
				nav:false
			},
			960:{
				items:5,
				nav:true,
				loop:false,
				mouseDrag: false,
				dots:false

			}
		}
    });
});

$(document).ready(function(){
	


	$("#obtener").on("click",function(){
		$("html, body").animate({ scrollTop: "0px" }, function(){
			$(".registroinicio").fadeIn();
			$('.registroinicio #email').focus(); 
			$(".boton .iniciar").hide();
			$(".boton .cerrar").show();
		});;	
	});


	

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
	
	$(".checkbox .nochequed").on("click",function(){
		$(this).addClass("chequed");
		$(this).removeClass("nochequed");
		$("#password, #passwordnuevo").attr('type', 'text'); 	
	});
	function chequed (){
	$(".checkbox .chequed").on("click",function(){
		$("#password, #passwordnuevo").attr('type', 'password'); 
		$(this).removeClass("chequed");
		$(this).addClass("nochequed");
		});
	};
	function nochequed (){
		$(".checkbox .nochequed").on("click",function(){
			$(this).addClass("chequed");
			$(this).removeClass("nochequed");
			$("#password, #passwordnuevo").attr('type', 'text'); 	
		});
	};
	$(".checkbox").on("click",function(){
		nochequed();
		chequed();		
	});
  
	//input file//
	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [label]);
		});
		$('.btn-file :file').on('fileselect', function(event, label) {    
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;   
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }   
		});
		function readURL(input) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();    
	        reader.onload = function (e) {
	            $('#img-upload').attr('src', e.target.result);
	        }       
	        reader.readAsDataURL(input.files[0]);
	    }
	}

	$("#imgInp").change(function(){
	    readURL(this);
	}); 
  
	//Scroll animado
	function subir(){
		$("#subir").click(function(){
			$("html, body").animate({ scrollTop: "0px" });
		});
	}
  	subir();

	$("#mapasvg .instruccion").click(function(){
		$(this).fadeOut();
	});

	$("#cambiar").click(function(){
		$('input').prop("readonly", false);
		$('.botones2').hide();
		$('.botones').show();
	});
	$("#cancelar").click(function(){
		$('input').prop("readonly", true);
		$('.botones2').show();
		$('.botones').hide();
	});	

    $('.owl-carousel.carruselproductos').owlCarousel({
		themeClass: 'owl-fullscreen owl-nonav white owl-loaded',
		margin:25,
		autoplay:true,
		loop:true,
		autoplayTimeout:4000,
		items:3, 
		navRewind:true, // Go to first/last.
		navText:true, // left and right arrows
		autoHeight: true,
		navContainerClass: 'owl-buttons',
		dotsClass: 'owl-pagination',
		dotClass: 'owl-page',
		/*animateOut: 'fadeOut',
		animateIn: 'fadeIn',*/
		autoplayHoverPause:true, //false
		lazyLoad: false, // IMG need special markup class="lazyOwl" and data-src="url_to_img" or/and data-src-retina="url_to_highres_img"
		pagination:false,
		responsiveClass:false,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1,
				navText:false,
				mouseDrag: true,
				dots:true
			},
			720:{
				items:2,
				mouseDrag: true,
				nav:false
			},
			960:{
				items:3,
				nav:true,
				loop:true,
				mouseDrag: false,
				dots:false

			}
		}
    })

   
    //owlCarousel//

    $(".boton .iniciar").click(function(){
    	$(".registroinicio").fadeToggle("fast");
    	$(this).hide();
    	$(".boton .cerrar").show();
    });
  
    $(".boton .cerrar").click(function(){
    	$(".registroinicio").fadeToggle("fast");
    	$(this).hide();
    	$(".boton .iniciar").show();
    });
         
		    	
    $("div").each(function(){
    	if($("div").hasClass("winterior")){
    		$("body").css("background","#f5f5f5");
    	}
    });
   
    $(".iconmenu.abrir").click(function(){
		$(".menuprincipalbox").slideDown("fast");
		$('body').css({
			overflow: 'hidden',	
		});
		$(this).hide();
		$(".iconmenu.cerrar").show();
	});

	$(".iconmenu.cerrar").click(function(){
		$(".menuprincipalbox").slideUp("fast");
		$('body').css({
			overflow: 'unset',	
		});	
		$(this).hide();
		$(".iconmenu.abrir").show();
	});

	$(".registroinicio .volver").click(function(){
		$(".registroinicio").hide();
		$(".menuprincipal ul li").show();
		$(".boton .iniciar").show();
	});

	$(".logofixed").hide();


 	function globalmenudesktop (tipo){
 		$(window).scroll(function(){
 			if(tipo == 1){
				var margen = self.pageYOffset;
				if(margen>=10){
					
					$(".header").addClass("fixed");
					$(".header").stop().animate({'margin-top':'-40px'}, 160, 'linear');
					$(".logofixed").hide();
					$(".registroinicio").fadeOut("fast");
					$(".boton .cerrar").hide();
					$(".boton .iniciar").show();
					//$(".logofixed").stop().fadeIn(100);
					//$(".col-md-3 .logo").stop().animate({'margin-top':'-200px'},100, 'linear');
					//$(".top").stop().animate({'top':'-40px'}, 120, 'linear');
					//console.log("margen >= 10");
				}else{
					$(".header").stop().animate({'margin-top':'0px'},160, 'linear');
					$(".header").removeClass("fixed");
					$(".logofixed").hide();
					//$(".col-md-3 .logo").stop().animate({'margin-top':'0px'},100, 'linear');
					$(".top").stop().animate({'top':'0px'}, 120, 'linear');
					//console.log("margen < 10");
					
				};
			}else {
				$(".top").stop().animate({'top':'0px'}, 120, 'linear');
				
				$(".header").stop().animate({'margin-top':'0px'},160, 'linear');
				$(".header").removeClass("fixed");
				$(".col-md-3 .logo").stop().animate({'margin-top':'0px'},100, 'linear');
				console.log("Movil");
			}
		});

    }


	if ($(window).width() >= 959){
			globalmenudesktop(1);
			$(".contacto ul li a").removeAttr('href');
	}else {
		globalmenudesktop(0);	
	}

    if ($(window).width() < 959) {
    	//deteccion direccion vertical scroll
	  	var lastScrollTop = 0;
		$(window).scroll(function(event){
			var st = $(this).scrollTop();
			
			if (st > lastScrollTop){
				$("#subir").stop().fadeOut(40)
			
			} else {
				$("#subir").stop().fadeTo(40, 0.6 );
			}
			if (st < 360){
				$("#subir").stop().fadeOut(20)
			}
			lastScrollTop = st;
		});



		$(".menutop").appendTo(".menuprincipal");
		$(".top form").appendTo(".menutop");

		/*menu mobile*/
		$(".iconmenu.abrir").click(function(){
			$(".menuprincipalbox").slideDown("fast");
			$(this).hide();
			$(".iconmenu.cerrar").show();
		});

		/*menu mobile*/
		$(".iconmenu.cerrar").click(function(){
			$(".menuprincipalbox").slideUp("fast");
			$(".iconmenu.abrir").show();
			$(this).hide();
		});

		$(".boton .iniciar").click(function(){
			$(".boton .cerrar").hide()
			$(".menuprincipal ul li").hide();			
		});
				
	}else {
		$('body').css({
			overflow: 'unset',	
		});
	}

	var mediaquery = window.matchMedia("(max-width:959px)");
	function handleOrientationChange(mediaquery) {
		if (mediaquery.matches) {
			globalmenudesktop(0);		
			$(".menutop").appendTo(".menuprincipal");
			$(".top form").appendTo(".menutop");
			$(".header").stop().animate({'margin-top':'0px'},160, 'linear');

			/*menu mobile*/
			$(".iconmenu.cerrar").click(function(){
				$(".menuprincipalbox").slideUp("fast");
				$('body').css({
					overflow: 'unset',	
				});
				$(".iconmenu.abrir").show();
				$(this).hide();
				
			});
		} else {
			$(".menutop").appendTo(".top .col-md-9");
			$('body').css({
				overflow: 'unset',	
			});
			globalmenudesktop(1);
			$(".contacto ul li a").removeAttr('href');
		}
	}
	mediaquery.addListener(handleOrientationChange);


});


//api google maps
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -33.4104455, lng: -70.5685494},
		zoom: 16,
		disableDefaultUI: true,
		scrollwheel: false,
		styles: 
		[
			{
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#f5f5f5"
			  }
			]
			},
			{
			"elementType": "labels.icon",
			"stylers": [
			  {
			    "visibility": "off"
			  }
			]
			},
			{
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#616161"
			  }
			]
			},
			{
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
			    "color": "#f5f5f5"
			  }
			]
			},
			{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#bdbdbd"
			  }
			]
			},
			{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#eeeeee"
			  }
			]
			},
			{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#757575"
			  }
			]
			},
			{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#e5e5e5"
			  }
			]
			},
			{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#9e9e9e"
			  }
			]
			},
			{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#ffffff"
			  }
			]
			},
			{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#757575"
			  }
			]
			},
			{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#dadada"
			  }
			]
			},
			{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#616161"
			  }
			]
			},
			{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#9e9e9e"
			  }
			]
			},
			{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#e5e5e5"
			  }
			]
			},
			{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#eeeeee"
			  }
			]
			},
			{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#c9c9c9"
			  }
			]
			},
			{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#9e9e9e"
			  }
			]
			}
		]
    });
    var marker = new google.maps.Marker({
		position: {lat: -33.4100177, lng: -70.5677694},
		map: map,
			title: 'Apumanque',
			icon: {
			url: base_url+"public/frontend/img/marker.svg",
			scaledSize: new google.maps.Size(44, 44)
		}
	});	
}

	
  /**
Código de César
**/
 function carga_ajax(ruta,valor1,div) 
        {
           //alert(valor1 );
            $("#"+div+"").html('');
           $.post(ruta,{valor1:valor1},function(resp)
           {
                $("#"+div+"").html(resp);
           });
           return false;
           
        }
        function autocompletado(texto,ide)
        {
            document.autocompletar.search.value=texto;
            document.autocompletar.id.value=ide;
            document.getElementById('mylist').innerHTML='';
        }
        function enviarAutocompletar()
        {
            window.location=base_url+'locales/detalle/'+document.autocompletar.id.value;
        }
function redireccionarSelect(id)
{
    if(id=='0')
    {
        return false;
    }
    window.location=base_url+'descuentos/search/'+id;
}
function redireccionarSelect2(id)
{
    if(id=='0')
    {
        return false;
    }
    window.location=base_url+'destacados/search/'+id;
}
function redireccionarSelect3(id)
{
    if(id=='0')
    {
        return false;
    }
    window.location=base_url+'locales/search/'+id;
}