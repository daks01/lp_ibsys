// init on any form on page
document.addEventListener("submit", (e) => {
	if (e.target?.hasAttribute("data-form")) {
		e.preventDefault();
		const form = e.target;

		validateForm(form);

		if (!form.checkValidity()) {
			return;
		}

		sendForm(form);
	}
});

function validateForm(form) {
	form.querySelectorAll(".form-field").forEach((element) => {
		const errorMsgEl = element
			?.closest("div")
			?.querySelector("[data-field-error]");

		if (!element.checkValidity()) {
			element.classList.add("form-field_error");
			errorMsgEl.innerHTML = element?.validationMessage;
			return;
		}

		element.classList.remove("form-field_error");
		errorMsgEl.innerHTML = "";
	});
}

function sendForm(form) {
	const formData = new FormData(form); // Используем FormData для отправки файла
	const fileInput = form.querySelector('input[type="file"]');
	const file = fileInput?.files[0];
	const actionMessage = form.querySelector("[data-form-msg]");

	if (file) {
		formData.append("file", file); // Добавляем файл в FormData
	}

	fetch("/send_message.php", {
		method: "POST",
		body: formData, // Отправляем FormData (не нужно явно указывать Content-Type)
	})
		.then((response) => {
			console.log(6);
			if (!response.ok) {
				throw new Error("Network error");
			}
			return response.json();
		})
		.then((response) => {
			if (response.result === "success") {
				actionMessage.innerHTML = "✅ Отправлено";
				form.reset();
			} else if (response.result === "error") {
				// Выводим конкретную ошибку, возвращенную PHP
				actionMessage.innerHTML = `❗ ${response.error}`;
			}
		})
		.catch((error) => {
			// Обработка ошибок сети или других проблем
			actionMessage.innerHTML =
				"❗ При отправке возникли проблемы.<br> Попробуйте позже";
			console.error(error);
		});
}
