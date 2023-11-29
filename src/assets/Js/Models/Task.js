class Task {
    id;
    userID;
    dateStart;
    dateEnd;
    timeStart;
    timeEnd;
    status;
    description;
    constructor(userID, dateStart, dateEnd, timeStart, timeEnd, status, description) {
        this.userID = userID;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.status = status;
        this.description = description;
    }
}