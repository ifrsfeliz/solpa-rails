$(document).on('ready page:load', function() {
  $("a.add_fields").data("association-insertion-method", 'before').data("association-insertion-node", 'this');

  $('body').on('cocoon:after-insert', function(e, insertedItem) {
    $("select.chosen-select").chosen();
  });

  $('.chosen-select').chosen({
    allow_single_deselect: true,
    no_results_text: "Sem resultados para",
    placeholder_text_single: "Selecione uma opção",
    placeholder_text_multiple: "Selecione as opções",
    width: '100%'
  });

  $('form').checkBo();

  $('[data-toggle="tooltip"]').tooltip();
});
