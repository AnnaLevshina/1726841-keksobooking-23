const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const showSuccessMessage = () => {
  // берём шаблон
  const template = document.querySelector('#success').content;

  // клонируем
  const element = template.querySelector('.success').cloneNode(true);

  // функция закрытия окна
  const closeMessage = () => {
    element.remove();
  };

  // обработчик события нажатия клавиши
  const escCloseMessageHandler = (evt) => {
    // если нажали esc
    if (isEscEvent(evt)) {
      // закрываем окно и удаляем обработчик события нажатия клавиши
      closeMessage();
      document.removeEventListener('keydown', escCloseMessageHandler);
    }
  };

  // деаем закрытие "по клику на любой области"
  // т.к. у нас это сообщение закрывает 100% экрана, то клик можно повесить на сам этот элемент
  element.addEventListener('click', () => {
    closeMessage();
  });

  // навешиваем обработчик нажатия клавиши
  document.addEventListener('keydown', escCloseMessageHandler);

  // вставляем элемент в body
  document.body.appendChild(element);
};

const showErrorMessage = () => {
  // берём шаблон
  const template = document.querySelector('#error').content;

  // клонируем
  const element = template.querySelector('.error').cloneNode(true);

  // функция закрытия окна
  const closeMessage = () => {
    element.remove();
  };

  // обработчик события нажатия клавиши
  const escCloseMessageHandler = (evt) => {
    // если нажали esc
    if (isEscEvent(evt)) {
      // закрываем окно и удаляем обработчик события нажатия клавиши
      closeMessage();
      document.removeEventListener('keydown', escCloseMessageHandler);
    }
  };

  // деаем закрытие "по клику на любой области"
  // т.к. у нас это сообщение закрывает 100% экрана, то клик можно повесить на сам этот элемент
  element.addEventListener('click', () => {
    closeMessage();
  });

  // навешиваем обработчик нажатия клавиши
  document.addEventListener('keydown', escCloseMessageHandler);

  // вставляем элемент в body
  document.body.appendChild(element);
};

export {showSuccessMessage, showErrorMessage};
/*document.querySelector('button').addEventListener('click', () => showSuccessMessage())
*/
