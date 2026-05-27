function introAppear() {
  $('#intro').show();
  $('#papers').hide();
  $('#resources').hide();
  $('#hijinks').hide();
};

function papersAppear() {
  $('#intro').hide();
  $('#papers').show();
  $('#resources').hide();
  $('#hijinks').hide();
};

function resourcesAppear() {
  $('#intro').hide();
  $('#papers').hide();
  $('#resources').show();
  $('#hijinks').hide();
};

function hijinksAppear() {
  $('#intro').hide();
  $('#papers').hide();
  $('#resources').hide();
  $('#hijinks').show();
};

$(document).ready(function() {
  $('body').show();
  introAppear();
}
);
