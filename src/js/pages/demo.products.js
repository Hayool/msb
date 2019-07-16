/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Products demo page
 */

$(document).ready(function() {
    "use strict";

    // Default Datatable
    $('#products-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            },
            "lengthMenu": "물건<select class='custom-select custom-select-sm ml-1 mr-1'>"+
                  '<option value="5">5개</option>'+
                  '<option value="10">10개</option>'+
                  '<option value="100">100개</option>'+
                  '<option value="-1">전체</option>'+
                  '</select> 씩 보기',
        },
        "pageLength": 5,
        "columns": [
            {
                'orderable': false, 'targets': 0,
                'render': function(data, type, row, meta){
                    if(type === 'display'){
                        data = "<div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" class=\"custom-control-input dt-checkboxes\"><label class=\"custom-control-label\">&nbsp;</label></div>";
                    }
                    return data;
                 },
                'checkboxes': {
                    'selectRow': true,
                    'selectAllRender': '<div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" class=\"custom-control-input dt-checkboxes\"><label class=\"custom-control-label\">&nbsp;</label></div>'
                }
            },
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
        ],
        "select": {
            "style": "multi"
        },
        "order": [[ 1, "asc" ]],
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });
} );