const btnSuccess = document.querySelector(".controls .success");
const btnWarning = document.querySelector(".controls .warning");
const btnError = document.querySelector(".controls .error");

btnSuccess.addEventListener("click", () => {
  createToast("toast--success", 4000);
});

btnWarning.addEventListener("click", () => {
  createToast("toast--warning");
});

btnError.addEventListener("click", () => {
  createToast("toast--error");
});

const createToast = (status, timeout) => {
  let templateInner = `<i class="fa-solid fa-circle-check toast__icon"></i>
            <span class="toast__message">This is a Succes Message</span>`;
  switch (status) {
    case "toast--success":
      templateInner = ` <i class="fa-solid fa-circle-check toast__icon"></i>
            <span class="toast__message">This is a Succes Message</span>`;
      break;
    case "toast--warning":
      templateInner = ` <i class="fa-solid fa-triangle-exclamation"></i>
        <span class="toast__message">This is a Warning Message</span>`;
      break;
    case "toast--error":
      templateInner = `  <i class="fa-solid fa-circle-exclamation"></i>
        <span class="toast__message">This is a Error Message</span>`;
      break;
  }

  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = `
            ${templateInner}
            <span class="toast__countdown"></span>
      `;

  let toastList = document.getElementById("toasts");
  toastList.appendChild(toast);
  timeout = timeout || 2000;
  setTimeout(() => {
    toast.style.animation = `slide_hide 2s linear forwards`;
  }, timeout);

  setTimeout(() => {
    toast.remove();
  }, timeout + 2000);
};
