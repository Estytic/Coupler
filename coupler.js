/**
 * Author: Hamza Waqas
 * Date: 10/22/13
 * Time: 1:08 PM
 */

(function(w,s) {
    window = w || window
        , window.__c = (function(c, d, cb) {
                var e
                  , i;
        var p = function(f,ab) { return (typeof ab === 'undefined' ? "/assets/js/com/build/" : ab)+f+".js"; }

        var ex = function(n) {
            var aE = document.getElementsByTagName('script')
                , y = false
                , k;
            for (k = 0; k < aE.length; k++ ) {
                if (aE[k].hasAttribute('data-name') && aE[k].getAttribute('data-name') === n)
                    y = true;
            }
            return y;
        }

        var l = function(e, icb) {
            //console.log("Script to Inject: ", e);
            var t = document.createElement(s)
                , r = false
                , h
                , j = eval("typeof ("+e+")");

            window.q = window.q || 0;
            if (j === 'undefined') {

                if ( ex(e) === true) {
                    icb(window.q);
                } else {
                    t.type = 'text/javascript';
                    t.src = p(e);
                    t.setAttribute('data-name',e);
                    h = document.getElementsByTagName(s)[0];
                    h.parentNode.insertBefore(t,h);
                    t.onload = t.onreadystatechange = function() {
                        if ( !r && (!this.readyState || this.readyState === 'complete') ) {
                            r = true;
                            window.q++;
                            icb(window.q);
                        }
                    }
                }
            } else {
                icb(window.q);
            }
        }

        var callback = function() {
            --i;
            if ( i === 0) {
                cb(i);
            }
        }

        if ((d instanceof Array) === false)
            throw Error("__c accepts second argument as array");

        i = d.length;
        l(c, function() {
            if (d.length > 0) {
                for (e in d) l(d[e], callback);
            } else {
                cb(i);
            }
        })
    });
})(window,"script");
