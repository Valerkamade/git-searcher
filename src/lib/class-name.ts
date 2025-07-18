/**
 * Хелпер для создания classNames с использованием CSS-модулей.
 *
 * @param cls - Основной класс блока, импортированный из CSS-модуля (например, `cls.sectionFeedback`).
 * @param mods - Объект с булевыми модификаторами (например, { [cls.visible]: true, [cls.active]: false }).
 * @param additional - Массив дополнительных классов (например, [cls.marginTop5, cls.padding20]).
 *
 * @returns Строку соединенных классов. Например:
 *
 * ```tsx
 * <div className={cn(cls.sectionFeedback, { [cls.visible]: true, [cls.active]: false }, [cls[theme], cls.padding25])}>
 * </div>
 * ```
 *
 * В результате будет сгенерирована строка:
 *
 * ```html
 * class="sectionFeedback visible dark padding25"
 * ```
 *
 * - Основной класс `sectionFeedback` всегда добавляется.
 * - Модификаторы (например, `visible`) добавляются только если их значение `true`.
 * - Дополнительные классы (например, `dark` и `padding25`) добавляются в конец.
 * - Удаляются дублирующиеся классы.
 */

export type TMods = Record<string, boolean>;

export function cn(
  cls: string,
  mods: TMods = {},
  additional: Array<string | undefined> = []
): string {
  const allClasses = [
    cls,
    // Фильтрация по Boolean, чтобы удалить undefined из additional
    ...(additional.filter(Boolean) as string[]),
    // Преобразуем mods в массив классов
    ...Object.entries(mods)
      // Фильтруем модификаторы, оставляя только те, у которых значение true
      .filter(([_, value]) => value) // Убедимся, что значение строго true
      // Преобразуем ключи модификаторов в классы
      .map(([className]) => className),
  ];

  // Убираем повторяющиеся классы
  const uniqueClasses = allClasses.reduce((result: string[], current) => {
    if (result.indexOf(current) === -1) {
      result.push(current);
    }
    return result;
  }, []);

  // Объединяем классы в строку
  return uniqueClasses.join(' ');
}
