// 1. Импортируйте утилиты из astro:content
import { defineCollection, z } from "astro:content";

// 2. Определите `type` и `schema` для каждой коллекции
const vacanciesCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		tag: z.string(),
		publishDate: z.string().transform((str) => new Date(str)),
	}),
});

// 3. Экспортируйте единственный объект collections, чтобы зарегистрировать вашу коллекцию(и)
// Этот ключ должен совпадать с именем вашего каталога коллекций в "src/content"
export const collections = {
	vacancies: vacanciesCollection,
};
