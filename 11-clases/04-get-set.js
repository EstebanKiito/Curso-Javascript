class Restaurant {
    #timetable;

    constructor(name){
        this.name = name;
    }
    get timetable(){
        return this.#timetable;
    }

    set timetable(value){
        let date = new Date(value);
        let time = date.getTime();
        if (Number.isNaN(time)) {
            throw new Error('Invalid date format. Please use a valid date string.');
        }
        this.#timetable = date
    }
    // Siempre necesitamos un lugar para almacenar el dato -> Recomendable usar un atributo privado

}

const restaurant = new Restaurant('McDonalds');
restaurant.timetable = '1 dec 2023';
 // Setting timetable to 10:00 - 22:00