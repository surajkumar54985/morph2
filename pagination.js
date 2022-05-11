// var $pagination = $('#pagination'),
// totalRecords = 0,
// records = [],
// displayRecords = [],
// recPerPage = 10,
// page = 1,
// totalPages = 0;
// $.ajax({
//       url: "https://www.bonhams.com/api/v1/lots/27708/?category=list&length=96&minimal=false&page=1",
//       async: true,
//       dataType: 'json',
//       success: function (data) {
//                   records = data;
//                   console.log(records);
//                   totalRecords = records.length;
//                   totalPages = Math.ceil(totalRecords / recPerPage);
//                   apply_pagination();
//       }
// });

// function apply_pagination() {
//     $pagination.twbsPagination({
//           totalPages: totalPages,
//           visiblePages: 6,
//           onPageClick: function (event, page) {
//                 displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;
//                 endRec = (displayRecordsIndex) + recPerPage;
               
//                 displayRecords = records.slice(displayRecordsIndex, endRec);
//                 generate_table();
//           }
//     });
// }

$(".panel .panel-body .row").slice(4).hide();
        $('#pagination').pagination({
  
            // Total number of items present
            // in wrapper class
            items: 9,
  
            // Items allowed on a single page
            itemsOnPage: 4, 
            onPageClick: function (noofele) {
                $(".wrapper .item").hide()
                    .slice(4*(noofele-1),
                    4+ 4* (noofele - 1)).show();
            }
        });