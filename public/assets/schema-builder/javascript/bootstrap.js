


document.addEventListener('DOMContentLoaded', () => {

  console.log('DOMContentLoaded');


  let application = new Application(
    WOOF_GRAPH_EDITOR_CONFIGURATION
    // document.querySelector('.woof-schema-editor'),
    // window.WP_BASE_URI
  );


  application.run(() => {
    if(WOOF_GRAPH_EDITOR_CONFIGURATION.postId) {
      application.getSchema().loadFromApi(WOOF_GRAPH_EDITOR_CONFIGURATION.wpApiBaseURL + '/woof-schema/' + WOOF_GRAPH_EDITOR_CONFIGURATION.postId);
    }
  });

});



