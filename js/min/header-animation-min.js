$(document).ready(function(){!function(){var e=new Headroom(document.querySelector("#header"),{tolerance:10,offset:0,classes:{initial:"animated",pinned:"slideDown",unpinned:"slideUp"}});e.init();var n=new Headroom(document.getElementById("#header"),{tolerance:10,offset:0,classes:{initial:"slide",pinned:"slide--reset",unpinned:"slide--down"}}),e=new Headroom(document.querySelector("#footer"),{tolerance:10,offset:300,classes:{initial:"animated",pinned:"slideDown",unpinned:"slideUp"}});e.init();var n=new Headroom(document.getElementById("#header"),{tolerance:10,offset:10,classes:{initial:"slide",pinned:"slide--reset",unpinned:"slide--down"}});n.init()}(),$(".subscribe-button").click(function(){$(".social-icons").addClass("hidden"),$(".subscribe-button").addClass("hidden"),$(".subscribe").removeClass("hidden"),$("#mce-EMAIL").focus()})});