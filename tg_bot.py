import logging
from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

# Установка уровня логирования
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)

# Обработчик команды /start
def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text('Привет! Это бот для сайта пригласительного на свадьбу.')

# Обработчик команды /rsvp
def rsvp(update: Update, context: CallbackContext) -> None:
    name = update.message.from_user.first_name
    message = f'Спасибо, {name}! Ваше присутствие на свадьбе подтверждено.'
    update.message.reply_text(message)

# Главная функция
def main() -> None:
    # Создание объекта Updater и передача токена вашего бота
    updater = Updater("YOUR_TELEGRAM_BOT_TOKEN")

    # Получение диспетчера для обработки команд
    dp = updater.dispatcher

    # Добавление обработчика команды /start
    dp.add_handler(CommandHandler("start", start))

    # Добавление обработчика команды /rsvp
    dp.add_handler(CommandHandler("rsvp", rsvp))

    # Запуск бота
    updater.start_polling()

    # Остановка бота при нажатии Ctrl+C
    updater.idle()

if __name__ == '__main__':
    main()