;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M509.060363 1012.982982c-275.001707 0-498.731909-223.783169-498.731909-498.784876s223.730202-498.731909 498.731909-498.731909 498.784876 223.730202 498.784876 498.731909S784.06207 1012.982982 509.060363 1012.982982zM509.060363 41.949413c-260.382972 0-472.248694 211.865722-472.248694 472.248694 0 260.435939 211.865722 472.30166 472.248694 472.30166 260.435939 0 472.30166-211.865722 472.30166-472.30166C981.362023 253.815135 769.496302 41.949413 509.060363 41.949413z"  ></path>' +
    '' +
    '<path d="M387.608338 785.439197 368.858222 766.742047 623.467853 512.132416 366.527699 255.192262 385.277815 236.495112 660.915119 512.132416Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M929.875273 705.992249l-27.973098 0L901.902174 118.54286l27.973098 0c15.45397 0 27.984355-12.530384 27.984355-27.984355 0-15.442714-12.530384-27.973098-27.984355-27.973098L90.541109 62.585407c-15.45397 0-27.984355 12.530384-27.984355 27.973098 0 15.45397 12.530384 27.984355 27.984355 27.984355l27.973098 0L118.514207 705.992249l-27.973098 0c-15.45397 0-27.984355 12.519128-27.984355 27.973098 0 15.442714 12.530384 27.973098 27.984355 27.973098L358.376157 761.938446 210.55139 909.741723c-11.029194 11.017938-11.029194 28.89919 0 39.917128 11.017938 11.029194 28.89919 11.029194 39.916105 0l187.753151-187.719382 44.014446 0 0 111.892393c0 15.45397 12.519128 27.973098 27.973098 27.973098 15.45397 0 27.973098-12.519128 27.973098-27.973098L538.181289 761.939469l44.014446 0 187.753151 187.719382c11.017938 11.029194 28.89919 11.029194 39.917128 0 11.029194-11.017938 11.029194-28.89919 0-39.917128L662.040225 761.939469l267.834025 0c15.45397 0 27.984355-12.530384 27.984355-27.973098C957.859627 718.511377 945.329243 705.992249 929.875273 705.992249L929.875273 705.992249zM845.943698 705.992249 595.10986 705.992249c-0.598634-0.022513-1.173732-0.022513-1.772366 0L427.078889 705.992249c-0.598634-0.022513-1.173732-0.022513-1.772366 0L174.472684 705.992249 174.472684 118.54286l671.471015 0L845.943698 705.992249 845.943698 705.992249zM363.749538 473.919706l62.223157-62.2119 90.24128 90.230024c5.949502 5.949502 13.82896 8.556886 21.618367 8.229428 7.845689 0.327458 15.781428-2.291183 21.7647-8.274454l138.172943-138.161686c11.356652-11.345396 11.356652-29.745465 0-41.102117-11.345396-11.345396-29.756721-11.345396-41.102117 0L537.628704 441.656909l-90.252537-90.230024c-2.87856-2.889817-6.230911-4.989641-9.809413-6.389524-10.758018-5.000897-23.830755-3.296069-32.703843 5.565762l-82.21549 82.21549c-11.356652 11.345396-11.356652 29.745465 0 41.102117C333.992817 485.265102 352.404142 485.265102 363.749538 473.919706L363.749538 473.919706z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowDown" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M527.929 750.768l438.277-431.027c6.798-6.686 6.891-17.619 0.203-24.42-6.686-6.801-17.62-6.891-24.42-0.203l-426.067 419.018-424.478-424.477c-6.743-6.743-17.677-6.743-24.42 0-3.372 3.372-5.058 7.792-5.058 12.211s1.687 8.84 5.058 12.211l436.584 436.584c6.705 6.705 17.56 6.75 24.32 0.102z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quxiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M555.4688 513.00736l90.52672-90.52672c4.3712-4.3712 6.76736-10.18752 6.74944-16.3776-0.0192-6.14656-2.42048-11.89504-6.74944-16.17536-4.352-4.35328-10.14528-6.75072-16.30976-6.75072-6.17216 0-11.94496 2.40128-16.2432 6.74944l-90.528 90.528-90.976-90.88768c-4.352-4.35328-10.14528-6.75072-16.30976-6.75072-6.17216 0-11.94496 2.40128-16.24192 6.74944-4.3712 4.3712-6.76864 10.1888-6.75072 16.37888 0.0192 6.14656 2.42048 11.89504 6.75072 16.17408l90.88768 90.8864-91.33824 91.33824c-4.3712 4.3712-6.76864 10.18752-6.75072 16.37888 0.0192 6.14656 2.42048 11.89504 6.75072 16.17536 4.352 4.35328 10.14528 6.74944 16.30976 6.74944 6.17088 0 11.94368-2.40128 16.24192-6.74944l91.33824-91.33824 90.8864 90.88768c4.352 4.35328 10.14528 6.75072 16.30976 6.75072 6.17216 0 11.94496-2.40256 16.2432-6.75072 4.3712-4.3712 6.76864-10.1888 6.75072-16.37888-0.0192-6.14656-2.42048-11.89504-6.74944-16.17408L555.4688 513.00736z"  ></path>' +
    '' +
    '<path d="M522.60096 129.23136c-211.73888 0-384 172.26112-384 384s172.26112 384 384 384c211.7376 0 384-172.26112 384-384S734.33856 129.23136 522.60096 129.23136zM522.60096 849.23136c-185.27104 0-336-150.72896-336-336 0-185.27104 150.72896-336 336-336 185.27104 0 336 150.72896 336 336C858.60096 698.5024 707.87072 849.23136 522.60096 849.23136z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuanquan" viewBox="0 0 1064 1024">' +
    '' +
    '<path d="M541.300695 135.494542C339.752564 135.494542 176.481641 298.765465 176.481641 500.313596c0 201.548131 163.270923 364.819054 364.819054 364.819054 201.548131 0 364.819054-163.270923 364.819054-364.819054C906.119749 298.765465 742.848826 135.494542 541.300695 135.494542zM541.300695 846.840887c-191.38604 0-346.527291-155.14125-346.527291-346.527291 0-191.38604 155.14125-346.527291 346.527291-346.527291 191.38604 0 346.527291 155.14125 346.527291 346.527291C887.827985 691.699636 732.686735 846.840887 541.300695 846.840887z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)