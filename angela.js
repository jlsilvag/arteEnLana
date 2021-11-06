
	
	$(document).ready(function(){
	  
	  $("#btn1").click(function(){
	  $("#btn2,#btn3,#btn4").toggle();
	    $("#btn1").attr("value","Volver"); 
	    $("#muñecas").toggle();
	    $("#logo1").toggle();
		
		$("#btn1").click(function(){
		
		$("#btn1").attr("value","Galería muñecas");
		$("#btn1").html("<meta http-equiv='refresh' content = '0'>");
		
        		
		});
	
	  $(".doll").click(function(){
	    $(this).toggleClass("doll1");
	  
	  });
	  });
	  
	  $("#btn2").click(function(){
	  $("#btn1,#btn3,#btn4").toggle();
	  $("#btn2").attr("value","Volver"); 
	    $("#vestidos").toggle();
	    $("#logo1").toggle();
	  $("#btn2").click(function(){
		
		$("#btn2").attr("value","Galería vestidos");
		$("#btn2").html("<meta http-equiv='refresh' content = '0'>");
		});
	  });
	  $(".dress").click(function(){
	    $(this).toggleClass("dress1");
	  
	  }); 

      $("#btn3").click(function(){
	  $("#btn1,#btn2,#btn4").toggle();
	  $("#btn3").attr("value","Volver"); 
	    $("#varios").toggle();
	    $("#logo1").toggle();
	  $("#btn3").click(function(){
		
		$("#btn3").attr("value","Varios y paraguas");
		$("#btn3").html("<meta http-equiv='refresh' content = '0'>");
		});
	  });
	  $(".umbrella").click(function(){
	    $(this).toggleClass("umbrella1");
	  //$("#logo1").toggle();
	  }); 
       
       $("#btn4").click(function(){
	  $("#btn1,#btn2,#btn3").toggle();
	  $("#btn4").attr("value","Volver"); 
	    $("#redes").toggle(); 
	    $("#logo1").toggle();
	  $("#btn4").click(function(){
		
		$("#btn4").attr("value","Contacto");
		$("#btn4").html("<meta http-equiv='refresh' content = '0'>");
		});
		
	  });
	     
	  
	  
	  
	});
	
	