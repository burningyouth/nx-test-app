// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { swc } from '@test/swc';
import { esbuild } from '@test/esbuild';
import { lazy, Suspense } from 'react';

const TestComponent = lazy(() =>
  import('@test/react-lib').then((mod) => ({ default: mod.TestComponent }))
);

export function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TestComponent />
      </Suspense>
      <NxWelcome title="test" />
      {swc()}
      {esbuild()}
    </div>
  );
}

export default App;
