function doGet() {
  return HtmlService
      .createTemplateFromFile('countdown_HTML')
      .evaluate();
}

function include(fileName){
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}
