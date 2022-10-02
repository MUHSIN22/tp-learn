
export default  (json={}) => {
  var form_data = new FormData();
  for (var key in json) {
    form_data.append(key, json[key]);
  }

  return form_data
}

