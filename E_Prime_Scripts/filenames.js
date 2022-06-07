var browseFolder = document.createElement('input');
browseFolder.type = 'file';
browseFolder.webkitdirectory = true;
browseFolder.multiple = true;
browseFolder.id = 'browseFolder';
browseFolder.addEventListener('change', function(e) {
  var files = e.target.files;
  for (var i = 0, f; f = files[i]; i++) {
    console.log(f.webkitRelativePath);
  }
});
document.body.appendChild(browseFolder);


var fileNames = document.createElement('button');
fileNames.innerHTML = 'Export File Names';
fileNames.addEventListener('click', function(e) {
  var files = document.getElementById('browseFolder').files;
  var csv = '';
  for (var i = 0, f; f = files[i]; i++) {
    csv += f.name + '\n';
  }
  var blob = new Blob([csv], {type: 'text/csv'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'export.csv';
  a.click();
});
document.body.appendChild(fileNames);
