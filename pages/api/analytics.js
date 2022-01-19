/*

This was a creative idea, also check out the next.js script component,
it will be helpful when adding the google analytics link

https://nextjs.org/docs/basic-features/script


function Analytics() {
  return (
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js%27);
  fbq('init', '434554711745336');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=434554711745336&ev=PageView&noscript=1"
/></noscript>
  );
}

export default Analytics;
*/