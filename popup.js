$(document).ready(function () {
  $( "#btnGo" ).click(function() {
    if($('#txtURL').val() && $('#txtURL').val().indexOf("coursera.org") >= 0) {
      setUrl();
    }
    else {
      $('#txtURL').focus();
    }
  });
  $("input[type='text']").on("click", function () {
    $(this).select();
  });
});

function setUrl() {
  // loadComplete = false;
  var url = $('#txtURL').val(); //https://class.coursera.org/scicomp-003/lecture/5
  var courseid = getURLParameter(url);

  // document.querySelector('webview').addEventListener("loadstop", function() {
  //   loadComplete = true;
  // });

  //https://class.coursera.org/scicomp-003/lecture/view?lecture_id=5
  document.querySelector('webview').src = 'https://class.coursera.org/' + courseid[0] + '/lecture/view?lecture_id=' + courseid[1];
}

function getURLParameter(givenstring) {
    return (/https:\/\/class\.coursera\.org\/([^\/]+)\/lecture\/(\d+)/.exec(givenstring)||[,null,null]).slice(1,3);
}
