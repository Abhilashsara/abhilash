document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#spinner").style.visibility = "visible";
    } else {
        document.querySelector(
          "#spinner").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
          if (navigator.onLine) {
            console.log('online');
          } else {
            console.log('offline');
          }
    }
};
