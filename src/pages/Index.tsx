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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-zinc-900 mb-6 tracking-tight">
              Свадебные
              <span className="block font-thin italic text-zinc-600">
                пригласительные
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-12 font-light leading-relaxed">
              Создаю уникальные пригласительные ручной работы
              <br />
              для вашего особенного дня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 text-lg"
              >
                Посмотреть работы
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-300 text-zinc-700 px-8 py-4 text-lg"
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Icon
            name="ChevronDown"
            size={24}
            className="text-zinc-400 animate-bounce"
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-6">
              Портфолио
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Каждое приглашение создается индивидуально с вниманием к деталям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Portfolio Item 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-[4/5] overflow-hidden rounded-t-lg">
                <img
                  src="/img/315ebca0-e0b7-4893-8320-1acb3079c515.jpg"
                  alt="Элегантное свадебное приглашение"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-normal text-zinc-900">
                  Классическая элегантность
                </CardTitle>
                <CardDescription className="text-zinc-600">
                  Минималистичный дизайн с золотым тиснением
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Portfolio Item 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-[4/5] overflow-hidden rounded-t-lg">
                <img
                  src="/img/09731694-4965-48ec-b8df-83c040be4e3f.jpg"
                  alt="Коллекция свадебных приглашений"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-normal text-zinc-900">
                  Авторская каллиграфия
                </CardTitle>
                <CardDescription className="text-zinc-600">
                  Рукописные элементы и натуральные материалы
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Portfolio Item 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-[4/5] overflow-hidden rounded-t-lg bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
                <Icon name="Heart" size={48} className="text-zinc-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-normal text-zinc-900">
                  Ваш проект
                </CardTitle>
                <CardDescription className="text-zinc-600">
                  Создадим уникальный дизайн специально для вас
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-6">
              Услуги
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="PenTool" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-4">Дизайн</h3>
              <p className="text-zinc-600">
                Индивидуальный дизайн с учетом ваших пожеланий и стиля торжества
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Palette" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-4">
                Каллиграфия
              </h3>
              <p className="text-zinc-600">
                Рукописные элементы и авторская каллиграфия для особой атмосферы
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Package" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-4">
                Комплект
              </h3>
              <p className="text-zinc-600">
                Полный комплект: приглашения, конверты, карточки рассадки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-6">
              Контакты
            </h2>
            <p className="text-xl text-zinc-600 mb-12">
              Готова обсудить ваш проект и воплотить мечты в реальность
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Icon
                  name="Phone"
                  size={24}
                  className="mx-auto mb-4 text-zinc-600"
                />
                <p className="text-zinc-900 font-medium">+7 (999) 123-45-67</p>
              </div>

              <div className="text-center">
                <Icon
                  name="Mail"
                  size={24}
                  className="mx-auto mb-4 text-zinc-600"
                />
                <p className="text-zinc-900 font-medium">
                  hello@invitations.ru
                </p>
              </div>

              <div className="text-center">
                <Icon
                  name="Instagram"
                  size={24}
                  className="mx-auto mb-4 text-zinc-600"
                />
                <p className="text-zinc-900 font-medium">@wedding_invites</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-zinc-900 hover:bg-zinc-800 text-white px-12 py-4 text-lg"
            >
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-400">
            © 2024 Свадебные пригласительные. Создано с любовью.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
