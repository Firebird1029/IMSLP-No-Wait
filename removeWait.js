console.log("Removing wait time using IMSLP No-Wait extension!");

var pdfUrl = $("#sm_dl_wait").attr("data-id");
$("#sm_dl_wait").after(`<br><span>IMSLP No-Wait: <a href="${pdfUrl}">Click here</a>.</span>`);