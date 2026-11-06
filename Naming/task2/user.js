module.exports = class User {
    constructor(name, dateOfBirth, subordinates = [], isAdmin = false) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.isAdmin = isAdmin;
        this.subordinates = subordinates;
        this.rating = 0;
    }

    toString() {
        return 'User [dateOfBirth=' + this.dateOfBirth + ', name=' + this.name + ', isAdmin=' + this.isAdmin + ', subordinates=['
            + this.subordinates.map(subordinate => subordinate.toString()).join(', ') + '], rating=' + this.rating + ']';
    }

    setRating(rating) {
        this.rating = rating;
    }
}
