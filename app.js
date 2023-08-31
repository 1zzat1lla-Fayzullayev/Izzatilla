const form = document.getElementById("form");
const TOKEN = "6331031875:AAFWyKAzRIOyRe-VmctYnTTnWOtp0IWu6YI";
const CHAT_ID = "5490568043";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    this.email.value === "" ||
    this.message.value === "" ||
    this.name.value === "" ||
    this.number.value === ""
  ) {
    Swal.fire("Xatolik yuz berdi!", "Ma'lumotlarni to'g'ri kiriting!", "error");

    return;
  }

  const getMessage = () => {
    let message = "<b>Saytdan habar keldi oka!</b>\n\n";
    message += `<b>Jo'natuvchi: </b> ${this.name.value}\n`;
    message += `<b>Email: </b> ${this.email.value}\n`;
    message += `<b>Telefon raqam: </b> ${this.number.value}\n`;
    message += `<b>Xabar: </b> ${this.message.value}\n`;

    return message;
  };

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: getMessage(),
    })
    .then((res) => {
      Swal.fire("Juda yaxshi!", "Xabaringiz jo'natildi!", "success");
    })
    .catch((err) => {
      Swal.fire("Xatolik yuz berdi!", "Xabaringiz jo'natilmadi!", "error");
    })
    .finally(() => {});
});
