import Message from "./Message";
export default class GameContextRemoveElementMessage extends Message {
public id: number;
constructor(id = 0) {
super();
this.id = id;

}
}
