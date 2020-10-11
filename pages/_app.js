import '../styles/globals.css'

if (typeof window !== 'undefined') {
  (function () {
    var options = {
      whatsapp: "525562353054", // WhatsApp number
      call_to_action: "Envíanos un mensaje", // Call to action
      position: "right", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script');
    s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
  })();
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
