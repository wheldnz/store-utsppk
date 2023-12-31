function showSoldOutPopUp() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "This book has been sold out",
  });
}

function showInfoPopUp() {
  Swal.fire({
    icon: "info",
    title: "Thank you for the message!",
    text: "Please wait about 24 hours",
  });
}

function showBuyNowPopUp() {
  Swal.fire({
    icon: "success",
    title: "Thank you for buying!",
    text: "Your order is on the way",
  });
}
