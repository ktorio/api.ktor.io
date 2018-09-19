var versionPlaceholder = document.getElementById('version-placeholder');
var ul = document.createElement('ul');
var info = document.createElement('span');
info.innerText = 'Versions:'
versionPlaceholder.appendChild(info);
versionPlaceholder.appendChild(ul);
for (version of ['0.9.2', '0.9.3', '0.9.4', '0.9.5']) {
	var active = document.location.pathname.match(new RegExp('^/' + version)) != null;
	var li = document.createElement('li');
	if (active) {
		var strong = document.createElement('strong');
		strong.innerText = version;
		li.append(strong);
	} else {
		var a = document.createElement('a');
		a.href = '/' + version;
		a.innerText = version;
		li.appendChild(a);
	}
	ul.appendChild(li);
}
