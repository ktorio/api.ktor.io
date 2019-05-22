var versions = ['0.9.3', '0.9.4', '0.9.5', '1.0.0', '1.0.1', '1.1.1', '1.1.2', '1.1.3', '1.1.4', '1.1.5', '1.2.0'];
var latestVersion = '1.2.0';

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(search, pos) {
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	};
}

function initializeVersionPlaceholder() {
	var versionPlaceholder = document.getElementById('version-placeholder');
	var ul = document.createElement('ul');
	var info = document.createElement('span');
	info.innerText = 'Versions:'
	versionPlaceholder.appendChild(info);
	versionPlaceholder.appendChild(ul);
	var documentPathname = document.location.pathname;

	for (version of versions) {
		var active = documentPathname.startsWith("/" + version);
		if (!active && documentPathname.startsWith("/latest") && version == latestVersion) active = true;
		var li = document.createElement('li');
		if (active) {
			var strong = document.createElement('strong');
			strong.innerText = version;
			li.append(strong);
		} else {
			var a = document.createElement('a');
			a.href = document.location.pathname.replace(/^\/(.*?)[\/$]/, '/' + version + '/');
			a.innerText = version;
			li.appendChild(a);
		}
		ul.appendChild(li);
	}
}

initializeVersionPlaceholder();
