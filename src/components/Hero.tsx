import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="mx-auto max-w-4xl font-bold tracking-tight text-slate-900 text-5xl sm:text-7xl">
            Переводите PDF
            <span className="relative whitespace-nowrap text-blue-600">
              <span className="relative"> мгновенно</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Искусственный интеллект переводит ваши документы с сохранением
            исходного форматирования. Поддержка 100+ языков.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
            >
              <Icon name="Upload" className="mr-2" size={20} />
              Загрузить PDF
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-700 px-8 py-4 text-lg rounded-full"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
          </div>
        </div>

        <div className="mt-20 flow-root sm:mt-24">
          <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="aspect-video rounded-md bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="FileText"
                  size={64}
                  className="mx-auto text-blue-600 mb-4"
                />
                <p className="text-lg text-slate-600">
                  Предварительный просмотр переводчика
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
