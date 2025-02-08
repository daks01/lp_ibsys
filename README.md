# Readme

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

## 🚀 Структура

```text
├── public/
│   ├── fonts
│   ├── email.php
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── blocks/
│   │   ├── vue/
│   ├── assets/
│   ├── layouts/
│   ├── utils/
│   └── pages/
├── astro.config.mjs
├── README.md
└── package.json
```

В папке `/layout` лежит шаблон для всех страниц

Файлы `*.astro` в папке `src/pages/` - это страницы сайта.
Роуты строятся на основе имен этих файлов

В папке `src/components/` в подпахках лежат:
- `ui` - базовые компоненты: кнопка, инпут, контейнер итп
- `layout` - компоненты лейаута: шапка, подвал
- `blocks` - секции с контентом, из которых собраны страницы
- `vue` - интерактивные vue компоненты (острова)
  (может быть и react/svelte. встраиваются подобно виджетам, не блокирую общий ренедр страницы)

Статика:
- фавиконки, шрифты и php-скрипты лежат в `public/`
  (это те файлы, которые не нуждаются в трансформации или оптимизации)
- глобальные стили в `/assets/css`
- картинки `/assets/images`
  подключаются через компонент <Image /> или <Picture > и оптимизируются при билде
  подключенные через <img> или `style='background-image'` не оптимизируются,(

## Деплой
билд и деплой происходит автоматически на push в ветку 'master'

### Staging
для деплоя на гитлаб пейджес нужно запушить в ветку 'staging'