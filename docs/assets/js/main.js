$(function () {

  function initSearchBox() {
    var pages = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      // datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,

      prefetch: baseurl + '/search.json'
    });

    $('#search-box').typeahead(null,{
      minLength: 0,
      highlight: true
    }, {
        name: 'pages',
        display: 'displayTitle',
        source: pages,
        templates: {
          suggestion: Handlebars.compile('<div>{{displayTitle}}</div>')
        }
      });

    $('#search-box').bind('typeahead:select', function (ev, suggestion) {
      window.location.href = suggestion.url;
    });
  }

  function styleContentToMD() {
    $('#markdown-content-container table').addClass('table');
    $('#markdown-content-container img').addClass('img-responsive');
  }

  initSearchBox();
  styleContentToMD();
});
