export interface IUser {
    uid: string;
    displayName: string;
    photoUrl: string;
}

export interface IMessage {
    uid: string;
    user: IUser;
    content: string;
}

export interface IRoom {
    roomName: string;
    user: IUser;
}
