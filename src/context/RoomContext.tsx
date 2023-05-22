import io, { Socket } from 'socket.io-client';
import { createContext, FC } from 'react';

const ws = 'http://localhost:5000';

export const RoomContext = createContext<null | Socket>(null);

interface Props {
  children: JSX.Element;
}

const RoomProvider: FC<Props> = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  const socket = io(ws, {
    auth: { token }
  });

  return <RoomContext.Provider value={socket}>{children}</RoomContext.Provider>;
};

export default RoomProvider;
