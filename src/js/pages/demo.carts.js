/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Products demo page
 */

$(document).ready(function() {
    "use strict";

    $('#products-datatable').DataTable({
        "language": {
			"search": "",
			"searchPlaceholder": "검색..."
        },
        "ordering": false,
        "select": {
            "style": "multi"
        },
        "order": [[ 1, "asc" ]],
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        },
        "scrollY": "600px",
        "scrollCollapse": true,
        "paging": false,
		"info": false,
		"dom": '<"toolbar">frtip'
    });
	$("div.toolbar").html('<h4>2019년 4월 25일 배송분</h4>');
	
	
	
    $('#products-datatable2').DataTable({
        "language": {
			"search": "",
			"searchPlaceholder": "검색..."
        },
        "ordering": false,
        "select": {
            "style": "multi"
        },
        "order": [[ 1, "asc" ]],
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        },
        "scrollY": "450px",
        "scrollCollapse": true,
        "paging": false,
		"info": false,
		"dom": '<"toolbar2">frtip'
    });
	$("div.toolbar2").html('<div class="btn-group"><button type="button" class="btn btn-sm btn-light dropdown-toggle mb-2 mr-1" id="dataCategory" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">품목분류</button><div class="dropdown-menu" aria-labelledby="dataCategory"><a class="dropdown-item" href="#">전체</a><a class="dropdown-item" href="#">육류</a><a class="dropdown-item" href="#">생선류</a><a class="dropdown-item" href="#">과일류</a><a class="dropdown-item" href="#">야채류</a></div></div>');
} );