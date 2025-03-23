# Readme

## 🧞 Как какать 

для локальной разработки и билда статичного сайта нужно:
- поставить Node.js (lts) https://nodejs.org/en
- обновить GIT https://git-scm.com/downloads до версии > 2.31
- в терминале перейти в корнь проекта 
- поставить зависимости
  `npm сi`
- для старта локального девсервера выполнить
  `npm run dev`

## 👾 Скрипты

```
"dev": "astro dev",  // start local devServer
"build": "astro build",  // build Release
"lint": "biome lint --write .",  // lints
"lint:fix": "biome check --write ."  // lints, formats and organizes imports
```

## Деплой

билд и деплой происходит автоматически на push в ветку 'master'

## 🚀 Структура

```text
├── public/
│   ├── Политика.pdf
│   ├── Презентация.pdf
│   ├── send_message.php
│   ├── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── blocks/
│   ├── content/
│   │   ├── fulldevcycle/
│   │   |   ├── *.md
│   │   ├── vacancies/
│   │   |   ├── *.md
│   ├── layouts/
│   ├── utils/
│   └── pages/
├── astro.config.mjs
├── README.md
└── package.json
```

- в папке `/layout` лежит шаблон для всех страниц
- в папке `src/pages/`лежат страницы сайта
  роуты строятся на основе имен этих файлов
- в `src/components/` в подпахках лежат:
  - `ui` - базовые компоненты: кнопка, инпут, контейнер итп
  - `blocks` - секции с контентом, из которых собраны страницы
- в `/content` лежит текст для модалок в markdown
- фавиконки, pdf и php-скрипты лежат в `public/`
  (тут оказываются файлы, которые не нуждаются в трансформации или оптимизации)
- глобальные стили в `/assets/css`
- картинки `/assets/img` подключаются через компонент <Image /> 
  и автоматически оптимизируются при билде
  - `/assets/img/clients` - все картинки из этой папки динамически попадают в блок логотипов клиентов

## Documentation

> Сайт собран с помощью Astro.Build 
- [Blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)
- [Documentation](https://docs.astro.build) 
- [Discord server](https://astro.build/chat)

Фичи:
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly
- ✅ Sitemap
- ✅ JSX в качестве шаблонизатора
- ✅ генерация статичного сайта
- ✅ возможность писать компоненты на любом фреймворке: react, vue, svelte etc
- ✅ и встраивать их в статичный сайт как интерактивные острова