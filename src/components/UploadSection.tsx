import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const UploadSection = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sourceLang, setSourceLang] = useState("auto");
  const [targetLang, setTargetLang] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [translatedUrl, setTranslatedUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    const files = Array.from(e.dataTransfer.files);
    const pdfFile = files.find((file) => file.type === "application/pdf");
    if (pdfFile) {
      setSelectedFile(pdfFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    }
  };

  const handleTranslate = async () => {
    if (!selectedFile || !targetLang) return;

    setIsTranslating(true);
    setProgress(0);

    // Simulate translation process
    const steps = [10, 25, 50, 75, 90, 100];
    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setProgress(step);
    }

    // Create mock translated file URL
    setTranslatedUrl(`translated_${selectedFile.name}`);
    setIsTranslating(false);
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
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
            >
              <Icon name="FolderOpen" className="mr-2" size={18} />
              Выбрать файл
            </Button>
            {selectedFile && (
              <p className="mt-3 text-sm text-green-600">
                <Icon name="CheckCircle" className="inline mr-1" size={16} />
                {selectedFile.name} (
                {(selectedFile.size / 1024 / 1024).toFixed(1)} МБ)
              </p>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Исходный язык
              </label>
              <Select value={sourceLang} onValueChange={setSourceLang}>
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
              <Select value={targetLang} onValueChange={setTargetLang}>
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

          {isTranslating && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Перевод в процессе...
                </span>
                <span className="text-sm text-gray-500">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {translatedUrl && (
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    className="text-green-600 mr-2"
                    size={20}
                  />
                  <span className="text-green-800 font-medium">
                    Перевод завершён!
                  </span>
                </div>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    // Simulate download
                    const link = document.createElement("a");
                    link.href = "#";
                    link.download = translatedUrl;
                    link.click();
                  }}
                >
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать
                </Button>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full disabled:opacity-50"
              disabled={!selectedFile || !targetLang || isTranslating}
              onClick={handleTranslate}
            >
              {isTranslating ? (
                <>
                  <Icon
                    name="Loader2"
                    className="mr-2 animate-spin"
                    size={20}
                  />
                  Переводим...
                </>
              ) : (
                <>
                  <Icon name="Zap" className="mr-2" size={20} />
                  Перевести документ
                </>
              )}
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
