export class User {
    public Id: number;
    public Name: string;
    public Status: boolean;
    public ClickCount: number;

    constructor(id: number, name: string, status: boolean, clickCount: number) {
        this.Id = id;
        this.Name = name;
        this.Status = status;
        this.ClickCount = clickCount;
    }
}
