# TagfansURLScheme

Add to config.xml

    <gap:plugin name="com.tagfans.url.scheme" version="0.1.0">
        <param name="URL_SCHEME" value="..." />
    </gap:plugin>
    
      
Add to html file

	function handleOpenURL(url) {
	  setTimeout(function() {
		if(url)
			window.urlSchemeValue = url;
		else
			 window.urlSchemeValue = "";
	  }, 0);
	}
	

	function getSchemeTrigger(){
		urlScheme.getScheme(function(url){alert("received url: " + url);});
	}
