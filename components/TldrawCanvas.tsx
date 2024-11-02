"use dom";

import 'tldraw/tldraw.css';
import { useSyncDemo } from '@tldraw/sync';
import { Tldraw } from 'tldraw';
import { type HTMLAttributes } from 'react';
import { type PropsWithDom } from '@/utils/dom';

type TldrawCanvasProps = PropsWithDom<{
  /** Tldraw unique user ID */
  userId: string;
  /** Tldraw's unique user name, this is public */
  userName: string;
  /** Pass styling directly to the Tldraw container on web */
  style?: HTMLAttributes<HTMLDivElement>['style'];
}>;

export default function TldrawCanvas(props: TldrawCanvasProps) {
  const store = useSyncDemo({
    roomId: 'the-power-of-dom-components',
    userInfo: {
      id: props.userId,
      name: props.userName,
    },
  });

  return (
    <div style={{ position: 'fixed', inset: 0, ...props.style }}>
      <Tldraw store={store} />
    </div>
  );
}
