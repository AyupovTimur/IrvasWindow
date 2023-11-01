const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          inputPhone = document.querySelectorAll('input[name="user_phone"]');

    inputPhone.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/^[a-zA-Z]*$/, '');
        });
    });
    
    const message = {
        loading: 'Загрузка...',
        done: 'Спасибо, оператор скоро свяжется в с Вами',
        error: 'Ошибка отправки формы'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.done;
                    })
                    .catch(() => {
                        statusMessage.textContent = message.error;
                    })
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    });
        });
    });
}

export default forms;