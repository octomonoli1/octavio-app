export class Project{

    private _id: number;
    private _name: string;
    private _startDate: Date;
    

    constructor(id: number, name: string, startDate: Date){
        this._id = id;
        this._name = name;
        this._startDate = startDate;
    }

    public get id(): number { return this._id; }
    public set id(value: number) { this._id = value; }
    public get name(): string { return this._name; }
    public set name(value: string) { this._name = value; }
    public get startDate(): Date { return this._startDate; }
    public set startDate(value: Date) { this._startDate = value; }
    
}