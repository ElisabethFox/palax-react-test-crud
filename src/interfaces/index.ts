export interface IPost {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export interface IUser {
  id: string;
  username: string;
  name: string;
  website: string;
}

export interface IModalButton {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  priority?: boolean;
}

export interface IModalWindow {
  isOpen: boolean;
  type: string;
  relevantPost: string;
}

// export interface IUsersState {
//   currentUserId: string | null;
//   entities: Record<string, IUser>;
//   ids: string[];
// }