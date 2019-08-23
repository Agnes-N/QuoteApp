export class Quote {

    showAuthor: boolean;
    constructor(public id: number, public quote: string, public author: string, public person: string, public completeDate: Date) {
        this.showAuthor = false;
    }

    // id: number;
    // quote: string;
    // author: string;

}
