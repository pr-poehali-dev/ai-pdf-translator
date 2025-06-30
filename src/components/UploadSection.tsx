import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const UploadSection = () => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Placeholder for file handling
    console.log("Files dropped:", e.dataTransfer.files);
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Загрузите PDF для перевода
          </h2>
          <p className="text-lg text-gray-600">
            Просто перетащите файл или выберите с устройства
          </p>
        </div>

        <Card className="p-8">
          <div
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200 ${
              isDragOver
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Icon
              name="Upload"
              size={48}
              className={`mx-auto mb-4 ${isDragOver ? "text-blue-500" : "text-gray-400"}`}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Перетащите PDF сюда
            </h3>
            <p className="text-gray-500 mb-6">
              или нажмите для выбора файла (до 50 МБ)
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
              <Icon name="FolderOpen" className="mr-2" size={18} />
              Выбрать файл
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Исходный язык
              </label>
              <Select>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Выберите язык" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">
                    🔍 Определить автоматически
                  </SelectItem>
                  <SelectItem value="en">🇺🇸 Английский</SelectItem>
                  <SelectItem value="ru">🇷🇺 Русский</SelectItem>
                  <SelectItem value="zh">🇨🇳 Китайский</SelectItem>
                  <SelectItem value="es">🇪🇸 Испанский</SelectItem>
                  <SelectItem value="fr">🇫🇷 Французский</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Целевой язык
              </label>
              <Select>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Перевести на..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ru">🇷🇺 Русский</SelectItem>
                  <SelectItem value="en">🇺🇸 Английский</SelectItem>
                  <SelectItem value="zh">🇨🇳 Китайский</SelectItem>
                  <SelectItem value="es">🇪🇸 Испанский</SelectItem>
                  <SelectItem value="fr">🇫🇷 Французский</SelectItem>
                  <SelectItem value="de">🇩🇪 Немецкий</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full"
              disabled
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Перевести документ
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              Обычно занимает 30-60 секунд
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UploadSection;
