document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.input-app-form');
    const inputAppResult = document.querySelector('.input-app-result');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const input = form.querySelector('.input-app-input');

        try {
            const response = await fetch('https://survival-islands-mineral-icon.trycloudflare.com/api/input', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data1 = await response.json();
            console.log('Ответ:', data1.text);

        } catch (error) {
            console.log('Ошибка:', error);
        }

        try {
            // Текст, который будет отправлен на сервер
            const payload = { text: input.value };

            // POST-запрос
            const response = await fetch('https://survival-islands-mineral-icon.trycloudflare.com/api/input', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Указываем тип контента
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload) // Отправляем JSON
            });

            const data = await response.json();

            inputAppResult.insertAdjacentHTML('beforeend', `<p>${data.text}</p>`);

        } catch (error) {
            console.log('Ошибка:', error);
        }
    });
});