export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  username: string;
  name: string;
  website: string;
}

export interface IModalButton {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  priority?: boolean;
}

export interface IModalWindow {}

