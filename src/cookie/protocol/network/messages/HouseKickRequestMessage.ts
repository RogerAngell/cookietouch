import Message from "./Message";
export default class HouseKickRequestMessage extends Message {
public id: number;
constructor(id = 0) {
super();
this.id = id;

}
}
