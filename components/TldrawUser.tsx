import { randomUUID } from 'expo-crypto';
import { type PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

const TldrawUserContext = createContext({
  userId: 'unknown',
  userName: 'unknown',
  setUserName: (userName: string) => {},
});

export function useTldrawUserContext() {
  return useContext(TldrawUserContext);
}

export function TldrawUserContextProvider(props: PropsWithChildren) {
  const userId = useMemo(() => randomUUID(), []);
  const [userName, setUserName] = useState('tester');

  return (
    <TldrawUserContext.Provider value={{ userId, userName, setUserName }}>
      {props.children}
    </TldrawUserContext.Provider>
  );
}
