function set_cookie(name, value, expires_year, expires_month, expires_day, path, domain, secure) {
  var cookie_string = name + "=" + escape(value);

  if (expires_year) {
    var expires = new Date(expires_year, expires_month, expires_day);
    cookie_string += "; expires=" + expires.toGMTString();
  }

  if (secure)
    cookie_string += "; secure";
  document.cookie = cookie_string;
} 
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
  if ( randomInteger(1, 10) == 3) {
{
  var current_date = new Date;
  var cookie_year = current_date.getFullYear() + 1;
  var cookie_month = current_date.getMonth();
  var cookie_day = current_date.getDate();
  set_cookie("promo_id", "207376", cookie_year, cookie_month, cookie_day, "/", "diskontshop.eu");
  document.cookie = updatedCookie;
};
};
