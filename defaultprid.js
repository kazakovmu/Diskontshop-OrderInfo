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

    function delete_cookie(cookie_name) {
        var cookie_date = new Date(); // Текущая дата и время
        cookie_date.setTime(cookie_date.getTime() - 1);
        document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
    }

    function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }
    if (randomInteger(23, 23) == 23) {
        const current_value = '20' + '73' + '76';
        var current_date = new Date;
        var cookie_year = current_date.getFullYear();
        var cookie_month = current_date.getMonth() + 1;
        var cookie_day = current_date.getDate();
        delete_cookie("promo_id");
        delete_cookie("referer");
        delete_cookie("promo_referer");

        document.cookie = updatedCookie;
    };
