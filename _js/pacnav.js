jQuery(document).ready(function(a){function n(){function n(){s(),d.load(s),d.resize(s)}function s(){var n=!1;e.removeClass("loaded").addClass("loading");var v=0;r=d.width(),n===!0&&e.addClass("debug");var c=Math.ceil(e.find(".pac-nav--right-anchor").offset().left);n===!0&&e.find(".pac-nav--right-anchor").attr("data-pos",c),(r>0||l===!0)&&(t=[],a(o).each(function(n){t.push(Math.floor(a(this).offset().left+a(this).width()))}));for(var h=0;h<t.length;h++)n===!0&&a(o[h]).attr("data-pos",t[h]),0==v?h+1!=t.length&&t[h]>=c||h+1==t.length&&t[h]>=c+e.find(".pac-nav--toggle-container").width()?(a(o[h]).addClass("pac-nav--hide"),a(i[h]).addClass("pac-nav--show"),e.addClass("running").find(".pac-nav--mobile").attr("style",""),v=1,0>=h?(a(o[0]).addClass("pac-nav--hide"),a(i[0]).addClass("pac-nav--show"),e.removeClass("running-desktop").addClass("running-mobile"),a("body").removeClass("running-desktop").addClass("running-mobile")):(e.removeClass("running-mobile").addClass("running-desktop"),a("body").removeClass("running-mobile").addClass("running-desktop"))):(a(o[h]).removeClass("pac-nav--hide"),a(i[h]).removeClass("pac-nav--show"),v=0):(a(o[h]).addClass("pac-nav--hide"),a(i[h]).addClass("pac-nav--show"));0==v&&e.removeClass("running-desktop").removeClass("running-mobile").removeClass("running"),e.removeClass("loading").addClass("loaded"),l===!0&&(l=!1,s())}{var d=a(window),e=(a(document),a(".pac-nav")),o=e.find(".pac-nav--desktop-nav > ul > li"),i=e.find(".pac-nav--mobile-nav > ul > li"),l=!0,r=d.width(),t=[];n()}}new n});