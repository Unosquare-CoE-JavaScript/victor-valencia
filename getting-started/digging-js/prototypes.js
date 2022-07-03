var homework = {
    topic: "JS"
};

homework.toString();

var homework = {
    topic: "JS"
};

var otherHomework = Object.create(homework);
otherHomework.topic;

var homework = {
    study() {
        console.log(`Please study ${ this.topic }`);
    }
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study();

var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study();