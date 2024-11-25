const button = document.querySelector("#notification");
button.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) =>
    console.log("El resultado es: " + resultado)
  );

  if (Notification.permission === "granted") {
    new Notification("Esta es una notificacion", {
      icon: "img/zerotwo.jpg",
      body: "Codigo con Zero Two"
    });
  }
});

new Promise((resolve, reject) => {
  // Perform some asynchronous task
  if (taskCompletedSuccessfully) {
    resolve(result); // Resolves the Promise
  } else {
    reject(error); // Rejects the Promise
  }
});
