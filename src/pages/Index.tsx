import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-display font-light text-rose-900">
            Paper Craft
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#portfolio"
              className="text-zinc-600 hover:text-rose-600 transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#services"
              className="text-zinc-600 hover:text-rose-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#contact"
              className="text-zinc-600 hover:text-rose-600 transition-colors"
            >
              Контакты
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-light text-rose-900 mb-6 tracking-tight">
            Уникальные
            <span className="block font-thin italic text-rose-700">
              пригласительные
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 mb-8 leading-relaxed">
            Создаю изысканные бумажные пригласительные ручной работы для ваших
            особенных моментов
          </p>
          <Button
            size="lg"
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg"
          >
            <Icon name="Heart" className="mr-2" size={20} />
            Посмотреть работы
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="container mx-auto px-6 py-16 bg-white/60 backdrop-blur-sm rounded-3xl mx-6 my-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-light text-rose-900 mb-6">
            Портфолио
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Каждая работа — это история, рассказанная через бумагу, текстуру и
            цвет
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Классические свадебные",
              style: "Элегантный стиль с золотым тиснением",
              color: "bg-gradient-to-br from-amber-100 to-yellow-50",
            },
            {
              title: "Минималистичные",
              style: "Чистые линии и современная типографика",
              color: "bg-gradient-to-br from-slate-100 to-zinc-50",
            },
            {
              title: "Винтажные",
              style: "Ретро-стиль с натуральными материалами",
              color: "bg-gradient-to-br from-rose-100 to-pink-50",
            },
            {
              title: "Детские праздники",
              style: "Яркие и игривые дизайны",
              color: "bg-gradient-to-br from-blue-100 to-cyan-50",
            },
            {
              title: "Корпоративные",
              style: "Строгие и представительные",
              color: "bg-gradient-to-br from-indigo-100 to-purple-50",
            },
            {
              title: "Креативные",
              style: "Нестандартные формы и решения",
              color: "bg-gradient-to-br from-green-100 to-emerald-50",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer`}
            >
              <div className="h-48 bg-white/70 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon name="FileImage" size={48} className="text-zinc-400" />
              </div>
              <h3 className="text-xl font-display font-medium text-zinc-800 mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-600 text-sm">{item.style}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-light text-rose-900 mb-6">
            Услуги
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Полный цикл создания пригласительных — от идеи до готового продукта
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "Palette",
              title: "Индивидуальный дизайн",
              description:
                "Создание уникального дизайна с учетом ваших пожеланий и стиля мероприятия",
              price: "от 3 000 ₽",
            },
            {
              icon: "Scissors",
              title: "Ручная работа",
              description:
                "Изготовление пригласительных с использованием качественных материалов",
              price: "от 500 ₽/шт",
            },
            {
              icon: "Package",
              title: "Комплексный подход",
              description:
                "Полный набор: пригласительные, конверты, карточки рассадки, меню",
              price: "от 10 000 ₽",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Icon name={service.icon} size={32} className="text-rose-600" />
              </div>
              <h3 className="text-xl font-display font-medium text-zinc-800 mb-4">
                {service.title}
              </h3>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-rose-600 font-medium text-lg">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 py-16 bg-rose-50/50 rounded-3xl mx-6 my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-light text-rose-900 mb-6">
            Как мы работаем
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Консультация",
              description: "Обсуждаем ваши идеи и пожелания",
            },
            {
              step: "02",
              title: "Дизайн",
              description: "Создаем эскизы и согласовываем концепцию",
            },
            {
              step: "03",
              title: "Изготовление",
              description: "Ручная работа с качественными материалами",
            },
            {
              step: "04",
              title: "Доставка",
              description: "Бережная упаковка и своевременная доставка",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-medium text-zinc-800 mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-light text-rose-900 mb-6">
            Контакты
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Готовы воплотить ваши идеи в жизнь? Свяжитесь со мной удобным
            способом
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={20} className="text-rose-600" />
              </div>
              <div>
                <p className="font-medium text-zinc-800">Телефон</p>
                <p className="text-zinc-600">+7 (999) 123-45-67</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                <Icon name="Mail" size={20} className="text-rose-600" />
              </div>
              <div>
                <p className="font-medium text-zinc-800">Email</p>
                <p className="text-zinc-600">hello@papercraft.ru</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                <Icon name="Instagram" size={20} className="text-rose-600" />
              </div>
              <div>
                <p className="font-medium text-zinc-800">Instagram</p>
                <p className="text-zinc-600">@papercraft_studio</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100">
            <h3 className="text-xl font-display font-medium text-zinc-800 mb-6">
              Напишите мне
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <textarea
                placeholder="Расскажите о вашем проекте"
                rows={4}
                className="w-full p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              ></textarea>
              <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-rose-100">
        <div className="text-center text-zinc-600">
          <p>© 2024 Paper Craft Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
