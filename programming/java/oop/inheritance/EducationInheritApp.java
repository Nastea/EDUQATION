public class EducationInheritApp{
    public static void main(String[] args){
      // проверить каждый класс путем
      // создания обьектов и вызова методов
    }
}
////////////////////////////////////////////
// класс образованный
class Educated{
    String fullname;     // ифо
    byte   age;          // возраст
    float average_grade; // сред бал
    byte level;          // уровень ( напр  5-ый класс )
    // добавить конструктор и геттеры сеттеры для всех свойств
    // добавить проверку на запись "average_grade" диапазон 1..10
    // добавить метод printInfo() который выводит инфу об этом человеке так
        // > fullname: John Doe Jr. (17 years)
        // > class: 10
        // > grade: 9.75
}

// класс ученик - добавиТь его как наследника класса "Educated"
class Pupil{
    // добавить имя школы где он учится/учился - "school_name"
    // добавить конструктор который учитывает школу
    // в контсруктор и геттер/сеттер свойства "level"  добавить
    // проверку чтобы можно было прописать только 1..12 диапазон классов
    // так же в конструктор и геттер сеттер свойства "age" проверку на 
    // значение в диапазоне 6..20 лет
    // printInfo() Допилить чтобы учитывал свойства ученика
}

// класс студента - добавиТь его как наследника класса "Pupil"
class Student{
    // добавить имя универа где он учится/учился - "university_name"
    // добавить имя направления обучения где он  - "speciality"
    // добавить конструктор который учитывает универ, направление
    // в контсруктор и геттер/сеттер свойства "level"  добавить
    // проверку чтобы можно было прописать только 1..7 диапазон курсов
    // так же в конструктор и геттер сеттер свойства "age" проверку на 
    // значение в диапазоне 19..30 лет
    // printInfo() Допилить чтобы учитывал свойства студента
}

// класс мастера - добавиТь его как наследника класса "Student"
class Master{
    // в контсруктор и геттер/сеттер свойства "level"  добавить
    // проверку чтобы можно было прописать только 1..3 диапазон лет
    // так же в конструктор и геттер сеттер свойства "age" проверку на 
    // значение в диапазоне 22..33 лет
    // printInfo() Допилить чтобы учитывал свойства студента
}
