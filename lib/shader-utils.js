var VERTEX_SHADER_SOURCE = null;
var FRAG_SHADER_SOURCE = null;

function loadShaderFile(gl, fileName, shader) {
  const request = new XMLHttpRequest();
  let success = false;
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      success = onLoadShader(gl, request.responseText, shader);
    }
  };

  try {
    request.open("GET", fileName, false);
    request.send();
  } catch {
    return success;
  }
  return success;
}

function onLoadShader(gl, fileStr, type) {
  if (type === gl.VERTEX_SHADER) {
    VERTEX_SHADER_SOURCE = fileStr;
  } else if (type === gl.FRAGMENT_SHADER) {
    FRAG_SHADER_SOURCE = fileStr;
  }

  return !!(VERTEX_SHADER_SOURCE && FRAG_SHADER_SOURCE);
}
